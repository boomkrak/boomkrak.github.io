$(document).ready(function(){
	$('.content__left').stick_in_parent({
		offset_top: 20
	});

	$('.btn-subscribe').click(function(){
		$('#mce-EMAIL').focus();
	});

	$('.popup').hide();
	$('.btn-subscribe').click(function(){
		$('.popup').fadeIn();
	});
	$('.popup__backdrop').click(function(){
		$('.popup').fadeOut();
	});
})