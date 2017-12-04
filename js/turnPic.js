//轮播图
$(function(){
		/*图片轮播*/
	var $num = 0;//图片数组索引
	var timer = null;//清除定时器
	var turnPicArr = ["img/1.png","img/2.png","img/3.png"];//图片数组
	var img = $('.banner>img').eq(0);//获取图片元素
	var lis = $('.banner-dots>li');//获取底部小圆点

	//自动轮播函数
	function turnAuto(){
		$num++;	
		if ($num<turnPicArr.length) {
			img.prop('src',turnPicArr[$num]);
			lis.eq($num).css('background','#00631E').siblings().css('background','#B4C1C7');
			
		} else{
			$num = 0;
			img.prop('src',turnPicArr[$num]);
			lis.eq($num).css('background','#00631E').siblings().css('background','#B4C1C7');
		}
	}
	timer = setInterval(turnAuto,3000);//自动轮播定时器
	
	//点击左边按钮，切换上一副图片
	$('.prev').click(function(){
		if($num>0){
			$num--;
			img.prop('src',turnPicArr[$num]);
			lis.eq($num).css('background','#00631E').siblings().css('background','#B4C1C7');
		}else if($num==0){
			$num = turnPicArr.length-1;
			img.prop('src',turnPicArr[$num]);
			lis.eq($num).css('background','#00631E').siblings().css('background','#B4C1C7');
		}
	});
	
	//点击右边按钮，切换下一张
	$('.next').click(function(){
		if($num<turnPicArr.length){
			$num++;
			img.prop('src',turnPicArr[$num]);
			lis.eq($num).css('background','#00631E').siblings().css('background','#B4C1C7');
		}else{
			$num = 0;
			img.prop('src',turnPicArr[$num]);
			lis.eq($num).css('background','#00631E').siblings().css('background','#B4C1C7');
		}
	});
	
	//点击小圆点切换图片
	$('.banner-dots>li').click(function(){
		var index = $(this).index();
		img.prop('src',turnPicArr[index]);
//		alert("aaa");
		$(this).css('background','#00631E').siblings().css('background','#B4B7B9');
	});
	
	$(".banner").hover(
		function(){
			clearInterval(timer);
		},
		function(){
			timer = setInterval(turnAuto,3000);
		}
	)	
});
	


