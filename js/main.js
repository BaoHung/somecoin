/**
* This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
* Want to see more similar demos and tutorials?
* Help by spreading the word about Ihatetomatoes blog.
* Facebook - https://www.facebook.com/ihatetomatoesblog
* Twitter - https://twitter.com/ihatetomatoes
* Google+ - https://plus.google.com/u/0/109859280204979591787/about
* Article URL: http://ihatetomatoes.net/how-to-make-parallax-website-responsive/
*/

(function ($) {
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');

	//FadeIn all sections   
	$body.imagesLoaded(function () {
		setTimeout(function () {

			// Resize sections
			adjustWindow();

			// Fade in sections
			$body.removeClass('loading').addClass('loaded');

		}, 800);
	});

	function adjustWindow() {

		// Get window size
		winH = $window.height();
		winW = $window.width();

		// Keep minimum height 550
		if (winH <= 550) {
			winH = 550;
		}

		// Init Skrollr for 768 and up
		if (winW >= 768) {

			// Init Skrollr
			var s = skrollr.init({
				forceHeight: false
			});

			// Resize our slides
			$slide.height(winH);

			s.refresh($('.homeSlide'));

		} else {

			// Init Skrollr
			var s = skrollr.init();
			s.destroy();
		}

		// Check for touch
		if (Modernizr.touch) {

			// Init Skrollr
			var s = skrollr.init();
			s.destroy();
		}

	}

	function initAdjustWindow() {
		return {
			match: function () {
				adjustWindow();
			},
			unmatch: function () {
				adjustWindow();
			}
		};
	}

	enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false)
		.listen(100);
})(jQuery);

$(document).ready(function () {
	if ($window.width() >= 768)
		$("body").niceScroll({
			cursorcolor: "#692193",
			cursorborder: "0px",
			zindex: "99"
		});

	// smooth scroll
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		// Remove links that don't actually link to anything
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();

					var offset = $window.width() < 768 ? $('.slicknav_menu').height() - $('.slicknav_menu>ul').height() : $('#header').height();
					var scrollTop = target.offset().top - offset + 1;

					$('html, body').animate({
						scrollTop: scrollTop
					}, 1000)
				}
			}
		});
	$('#navbar ul').slicknav({
		parentTag: 'div',
		label: '',
		closeOnClick: true
	});
	// INIT Swiper
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 4,
		// autoHeight: true,
		// spaceBetween: 50,
		autoplay: {
			delay: 3000,
		},
		// init: false,
		pagination: {
			el: '.swiper-pagination'
			// type: 'fraction',
		},
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			500: {
				slidesPerView: 1,
				spaceBetween: 0,
			}
		}
	});

	// FAQ
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
});
// $(window).on('resize', function () {
// 	$("#body").getNiceScroll().resize();
// });