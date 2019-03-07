$(function(){
/*合作媒体滚动*/
var linkObj,linkTop;
$(".par_round ul").each(function(){
	if($(".par_round").find("li").length>1){
		linkTop=-($(this).height());
		linkObj=$(this);
		$(".par_round ul").append(linkObj.html());
		var timer=setInterval(function(){linkMar(linkObj,linkTop)},10);
	}
	$(this).hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){linkMar(linkObj,linkTop)},10);
	})
});
function linkMar(linkObj,linkTop){
	if(parseInt(linkObj.css("marginTop"))<=linkTop){
		linkObj.css({"marginTop":0});
	}else{
		var topH=parseInt(linkObj.css("marginTop"))-1;
		linkObj.css("marginTop",topH);
	}
}

$(".loginBox .form-item label").click(function(){
		$(this).hide().siblings("input").focus();
	});
	$(".loginBox .form-item input").each(function(){
		if($(this).val() !== ''){  
			$(this).siblings("label").hide();
		} 
	}).focus(function(){
		if($(this).val() == ''){  
			$(this).siblings("label").hide();
		} 

	}).blur(function(){
		if($(this).val() == ''){  
			$(this).siblings("label").show();
		} 
	})
})


          
