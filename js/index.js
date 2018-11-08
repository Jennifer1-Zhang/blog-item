$(function(){
	$('.nav_ul li').click(function(){
		$(this).addClass('active').siblings(this).removeClass('active')
	})
	$('.nav_ul .side_menu').click(function(){
		$('.mask').fadeIn();
		$('.side').show(500);
	})
	$('.mask').click(function(){
		$(this).fadeOut();
		$('.side').hide();
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>=100){
			$('.top_logo').css('display','block')
		}else{
			$('.top_logo').css('display','none')
		}
	})
	$('.top_logo').click(function(){
		$('html,body').animate({
			scrollTop:0
		},500)
	})
})