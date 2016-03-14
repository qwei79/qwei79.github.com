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


var header = document.getElementsByTagName("header")[0];
var headerHeight = header.offsetHeight;
var headerHeightTop;
window.onload = function(){
  header.className = "top";
  headerHeightTop = header.offsetHeight;
  header.className = "";

  var hRa= new Array;
  var hRspan = new Array;
  var hRp = document.getElementsByClassName("h-r")[0].getElementsByTagName("p");
  for (var i = 1; i < hRp.length; i++) {
    hRa[hRa.length] = hRp[i].getElementsByTagName("a")[0];
    hRspan[hRspan.length] = hRp[i].getElementsByTagName("span")[0];
  };
  console.log(hRa);
  var hRaWidth=0, hRspanWidth=0;
  for (var i = 0; i<hRa.length; i++) {
    if(hRa[i].offsetWidth > hRaWidth){
      hRaWidth = hRa[i].offsetWidth;
    }
  };
  for (var i = 0; i<hRa.length; i++) {
    hRa[i].style.width = hRaWidth + 10 + "px";
  };
  for (var i = 0; i<hRspan.length; i++) {
    if(hRspan[i].offsetWidth > hRspanWidth){
      hRspanWidth = hRspan[i].offsetWidth;
    }
  };
  for (var i = 0; i<hRspan.length; i++) {
    hRspan[i].style.width = hRspanWidth + "px";
  };
}
window.onscroll = function(){
  var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  if( scrollHeight >= headerHeight - headerHeightTop ) {
    header.className = "top";
    document.body.style.paddingTop = headerHeight + "px";
  } else {
    header.className = "";
    document.body.style.paddingTop = 0;
  }
}
