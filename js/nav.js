$(function(){
	$('.nav_li').mouseover(function(){
		//鼠标悬浮到一级导航时，出现二级导航，并且一级导航背景改变
		$(this).find('.nav_ul_child').show().siblings().hide();
		$(this).addClass('liback').siblings().removeClass('liback');
	});
	$('.nav_li').mouseout(function(){
		//鼠标离开一级导航时二级导航消失
		$('.nav_ul_child').hide();
	});
	
	//鼠标悬浮到二级导航时
	$('.nav_ul_child>li').mouseover(function(){
		$(this).addClass('liback').siblings().removeClass('liback');
		$(this).find('img').show();
	});
	$('.nav_ul_child>li').mouseout(function(){
		$(this).find('img').hide();
	})
	
})