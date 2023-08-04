


'use strict';



$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$(this).toggleClass('active');
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});



	/*------------------
		Video Popup
	--------------------*/
	$('.play-btn').magnificPopup({
		type: 'iframe'
	});

	/*------------------
		Image Popup
	--------------------*/
	$('.img-popup-gallery').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
	});

})(jQuery);
