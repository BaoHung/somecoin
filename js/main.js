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


	$('#navbar ul').slicknav({
		parentTag: 'div',
		label: '',
		closeOnClick: true
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
					var scrollTop = target.offset().top - offset;

					$('html, body').animate({
						scrollTop: scrollTop
					}, 1000)
				}
			}
		});
})(jQuery);

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// 	anchor.addEventListener('click', function (e) {
// 		e.preventDefault();

// 		document.querySelector(this.getAttribute('href')).scrollIntoView({
// 			behavior: 'smooth',
// 			block: 'start',
// 			inline: 'nearest'
// 		});
// 	});
// });
