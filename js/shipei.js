var i = window.devicePixelRatio>1?1/window.devicePixelRatio:1;//查看像素比，用于页面缩放；
var meta =document.createElement("meta"); //创建meta标签
meta.name="viewport";  //添加可视窗口
meta.content='width=device-width,user-scalable=no,initial-scale='+i+',minimum-scale='+i+',maximum-scale='+i;
document.getElementsByTagName("head")[0].appendChild(meta);//动态添加meta-viewport标签，设置好适配；

var html = document.getElementsByTagName("html")[0];
var iW =document.body.offsetWidth;
var scale=iW/720*100;
html.style.fontSize=scale+"px";//动态设置html根节点的font-size，用于rem布局；

window.onresize=function(){
	var html = document.getElementsByTagName("html")[0];
	var iW =document.body.offsetWidth;
	//根据测量出来的尺寸除以100，单位转化为rem
	var scale=iW/720*100;
	html.style.fontSize=scale+"px";//动态设置html根节点的font-size，用于rem布局；
}
console.log(scale)












	//移动端适配函数封装  页面宽度640   根据测量出来的尺寸除以100，单位转化为rem
	 (function(doc, win){ 
			 var docE1 = doc.documentElement, 
			 resizeEvt = 'orientationchange' in window ?'orientationchange' : 'resize', 
			 recalc = function(){ 
			 var clientWidth = docE1.clientWidth; 
			 if(!clientWidth) return; 
			 docE1.style.fontSize = 100*(clientWidth/320) + 'px';    //320是设计图的大小
			 }; 
			 if (!doc.addEventListener) return; 
			 win.addEventListener(resizeEvt,recalc,false); 
			 doc.addEventListener('DOMContentLoaded',recalc,false); 
			 })(document,window); 