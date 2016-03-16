/* getElementsByClassName 兼容处理 */
function getElementsByClassName(node, classname) {
  if (node.getElementsByClassName){
	//使用现有方法
	return node.getElementsByClassName(classname);
  } else {
	var results = new Array();
	var elems = node.getElementsByTagName("*");
	for (var i=0; i<elems.length; i++){
	  if (elems[i].className.indexOf(classname) != -1){
	  	results[results.length] = elems[i];
      }
	}
	return results;
  }
}

/* header部分 */
var header = document.getElementsByTagName("header")[0];
var headerHeight = header.offsetHeight;
var headerHeightTop;
/* header上滚高度获取 */
function headerScroll(){
  header.className = "top";
  headerHeightTop = header.offsetHeight;
  header.className = "";
}/* headerScroll end */
/* header上滚样式变更 */
function headerTop(){
  var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  if( scrollHeight >= headerHeight - headerHeightTop ) {
    header.className = "top";
    document.body.style.paddingTop = headerHeight + "px";
  } else {
    header.className = "";
    document.body.style.paddingTop = 0;
  }
}/* headerTop end */

/* info部分的span宽度调整 */
function infoSpanWidth(){
  var span = document.getElementsByClassName("h-r")[0].getElementsByTagName("span");
  var spanTitle=0, spanInfo=0;
  for (var i = 0; i<(span.length/2); i++) {
    if(span[2*i].offsetWidth > spanTitle){
      spanTitle = span[2*i].offsetWidth;
    }
  };
  for (var i = 0; i<(span.length/2); i++) {
    span[2*i].style.width = spanTitle + 10 + "px";
  };
  for (var i = 0; i<(span.length/2); i++) {
    if(span[2*i+1].offsetWidth > spanInfo){
      spanInfo = span[2*i+1].offsetWidth;
    }
  };
  for (var i = 0; i<(span.length/2); i++) {
    span[2*i+1].style.width = spanInfo + 10 + "px";
  };
}/* infoSpanWidth end */

/* 首页特效调用 */
function indexScript(scriptName) {
  var scriptArray = document.getElementsByTagName("script");
  var scriptSrc = "javascripts/" + scriptName + ".js";
  var scriptBool = true;
  for (var i=0; i<scriptArray.length; i++){
    if(scriptArray[i].getAttribute("src")==scriptSrc){
      scriptBool = false;
    }
  }
  if(scriptBool){
    var script = document.createElement("script");
    script.src= scriptSrc;
    document.body.appendChild(script);
  }
}/* indexScript end */

function pubuliu(){
  /* 使用for in运算返回数组中某一值的对应项数(比如算出最小的高度值是数组里面的第几个) */
  function getarraykey(s, v) {for(k in s) {if(s[k] == v) {return k;}}}
  var margin = 10;
  var pubuliu=document.getElementsByClassName("pubuliu");
  for(var pbl=0; pbl<pubuliu.length; pbl++){
    var pblLi=pubuliu[pbl].getElementsByTagName("li");
    var pblLiWidth = pblLi[0].offsetWidth + margin;
    var h = new Array;
    var n = (pubuliu[pbl].offsetWidth + margin)/pblLiWidth|0;
    for(var i = 0;i < pblLi.length;i++) {
      var pblLiHeight = pblLi[i].offsetHeight;
      if(i < n) {
        h[i]=pblLiHeight;
        pblLi[i].style.top= 0;
        pblLi[i].style.left=i * pblLiWidth + "px";
        max_H = Math.max.apply(null,h);//取数组中的最大值，区块中高度最大的那个
        maxKey = getarraykey(h, max_H);//最大的值对应的指针
        pblHeight = h[maxKey];
      } else {
        min_H = Math.min.apply(null,h) ;//取得数组中的最小值，区块中高度值最小的那个
        minKey = getarraykey(h, min_H);//最小的值对应的指针
        h[minKey] += pblLiHeight + margin ;//加上新高度后更新高度值
        pblLi[i].style.top=min_H+margin + "px";//先得到高度最小的Li，然后把接下来的li放到它的下面
        pblLi[i].style.left=minKey * pblLiWidth + "px"; //第i个li的左坐标就是i*li的宽度
        max_H = Math.max.apply(null,h);
        maxKey = getarraykey(h, max_H);
        pblHeight = h[maxKey];
      }
    }
    pubuliu[pbl].style.height = pblHeight + "px";
  }
}/* pubuliu end */

/* 按钮组宽度设置 */
function aGroupWidth(){
  var a_group = document.getElementsByClassName("a-group");
  for(var i=0; i<a_group.length; i++){
    var a_button=a_group[i].getElementsByTagName("a");
    for(var ii=0; ii<a_button.length; ii++){
      a_button[ii].style.width=a_group[i].offsetWidth*(1/a_button.length) + "px";
    }
    a_button[a_button.length - 1].style.width = a_group[i].offsetWidth*(1/a_button.length) - 2 + "px";
  }
}

window.onscroll = function(){
  headerTop();
}/* window.onscroll end */
window.onresize = function(){
  pubuliu();
  aGroupWidth();
}/* window.onresize end */
window.onload = function(){
  headerScroll();
  infoSpanWidth();
  pubuliu();
  aGroupWidth();
}/* window.onload end */
