/* 创建ajax对象方法 */
function getHTTPObject(){
  if(typeof XMLHttpRequest == "undefined")
    XMLHttpRequest = function () {
      try { return new ActiveXObject("Msxml2.XmlHTTP.6.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) {}
      return false;
    }
    return new XMLHttpRequest();
}

//调用示例
var request = getHTTPObject();
if (request) {//如果支持ajax方法，则会返回一个ajax对象，否则返回false;
  request.open("GET","wenjian.txt",true);//读取文件
  //onreadystatechange 表示响应之后如何处理
  request.onreadystatechange = function(){
    if(request.readyState == 4){
      //0：未初始化;
      //1：正在加载;
      //2：加载完毕;
      //3：正在交互;
      //4：完成。
      console.log(request.responseText);//输出文本字符串形式的数据
      /*
      **输出 Content-Type 头部中指定为 text/xml 的数据。
      **是一个DocumentFragment对象，可以用各种DOM方法来处理这个对象
      */
      console.log(request.responseXML);
    }
  };
  //发送请求
  request.send(null);
} else {
  console.log("不支持ajax！");
}
