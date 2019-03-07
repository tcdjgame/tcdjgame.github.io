// JavaScript Document
$(function(){
   
   // 幻灯
	var len = $('#focus-box ul li').length, index = 0;
	function show(index){
		$('#focus-btn a').eq(index).addClass('act').siblings().removeClass('act')
		$('#focus-box ul li').eq(index).fadeIn(900).siblings().fadeOut(400);
	}
	$('#focus-btn a').mouseenter(function(){
		var index = $(this).index();
		show(index);
	}).eq(0).trigger('mouseenter')
	$('#focus-box').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			index++;
			if(index == len){ index = 0}
			show(index);
		},4500)
	}).trigger('mouseleave');
	
});


