$(document).ready(function(){
	var margin_left = $('.nav-wrap')[0].offsetWidth;//不够准确记得重选算位子
	$('.nav-wrap').css('margin-left',-1*(margin_left/2)+'px');

	//默认显示第一个菜单
	$(".wrap").find(".content").eq(0).css({'display':'block'});//记得修改选择器

	//导航滑动效果（交互上动画有点问题）
	$('.nav-wrap ul> li').hover(function(e){
		var nav_slider_width=$(this).outerWidth();
		$('.nav-slider').css('width',nav_slider_width+'px');
		var nav_slider_left=$(this).offset().left;
		$('.nav-slider').css('left',nav_slider_left+'px');
		e.stopPropagation();
	},function(event){
		$('.wrap > .content').each(function(){
			if($(this).is(':visible')){
				$('.nav-slider').css('width',$(".nav-wrap ul").find("li").eq($(this).index()-1).outerWidth()+'px')
				$('.nav-slider').css('left',$(".nav-wrap ul").find("li").eq($(this).index()-1).offset().left+'px')
			}
		});
		event.stopPropagation();
	});

	//页面加载时，默认选中第一个
	$('.nav-slider').css('width',$(".nav-wrap ul").find("li").eq(0).outerWidth()+'px')
	$('.nav-slider').css('left',$(".nav-wrap ul").find("li").eq(0).offset().left+'px')

	//点击事件
	$('.nav-wrap ul> li').click(function(){
		$(".wrap").find(".content").css({'display':'none'});
		$(".wrap").find(".content").eq($(this).index()).css({'display':'block'});
	});
	//启动图片查看器
	$('.galpop').galpop();
});