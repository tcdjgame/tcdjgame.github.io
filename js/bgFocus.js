// JavaScript Document
$(function(){
	//页面背景切换
	var len = $('#bg_focus ul li').length, index = 0;
	function show(index){
		$('#bg_fbtn a').eq(index).addClass('act').siblings().removeClass('act')
		$('#bg_focus ul li').eq(index).fadeIn(900).siblings().fadeOut(400);
	}
	$('#bg_fbtn a').click(function(){
		var index = $(this).index();
		show(index);
	}).eq(0).trigger('click')
	$('#bg_focus').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			index++;
			if(index == len){ index = 0}
			show(index);
		},4500)
	}).trigger('mouseleave');	
	
	//vip切换
	$(".vip_til ul li").hover(function(){
		$(this).addClass("vip_cur").siblings("li").removeClass("vip_cur");
		var vip_ind = $(this).index();
		$(".vip_box ul li").eq(vip_ind).show().siblings("li").hide();
	});
})