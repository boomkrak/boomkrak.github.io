$(document).ready(function(){
	$('.content__left').stick_in_parent({
		
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

	$('.job__list li').each(function(){
		var jobdate = $(this).find('.jobdate').val();
		var timeago = moment(jobdate, 'DD/MM/YYYY').startOf('day').fromNow();
		$(this).find('.timeago').html(timeago);
	})
	
	
	//console.log(timeago);

})