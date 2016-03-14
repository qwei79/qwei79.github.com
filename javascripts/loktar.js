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
