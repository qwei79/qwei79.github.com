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

window.onload = function(){

  /* header上滚高度获取 */
  header.className = "top";
  headerHeightTop = header.offsetHeight;
  header.className = "";

  /* info部分的span宽度调整 */
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

}/* window.onload end */

window.onscroll = function(){

  /* header上滚样式变更 */
  var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  if( scrollHeight >= headerHeight - headerHeightTop ) {
    header.className = "top";
    document.body.style.paddingTop = headerHeight + "px";
  } else {
    header.className = "";
    document.body.style.paddingTop = 0;
  }

}/* window.onscroll end */

/* 首页特效调用 */
function indexScript(scriptName) {
  var scrArray = document.getElementsByTagName("script");
  var scriptBool = true;
  for (var i=0; i<scrArray.length; i++){
    var scrSrc = "javascripts/" + scriptName + ".js";
    if(scrArray[i].getAttribute("src")==scrSrc){
      scriptBool = false;
    }
  }
  if(scriptBool){
    var script = document.createElement("script");
    script.src= "javascripts/" + scriptName + ".js";
    document.body.appendChild(script);
  }
}/* indexScript end */

