;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};






	var offcanvasMenu = function() {
		$('body').prepend('<div id="fh5co-offcanvas" />');
		$('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');

		$('.fh5co-main-nav .fh5co-menu-1 a, .fh5co-main-nav .fh5co-menu-2 a').each(function(){

			var $this = $(this);

			$('#fh5co-offcanvas').append($this.clone());

		});
		// $('#fh5co-offcanvas').append
	};

	var mainMenuSticky = function() {
		
		var sticky = $('.js-sticky');

		sticky.css('height', sticky.height());
		$(window).resize(function(){
			sticky.css('height', sticky.height());
		});

		var $section = $('.fh5co-main-nav');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {

			    	$section.css({
			    		'position' : 'fixed',
			    		'top' : 0,
			    		'width' : '100%',
			    		'z-index' : 99999
			    	}).addClass('fh5co-shadow');;

			}

		}, {
	  		offset: '0px'
		});

		$('.js-sticky').waypoint(function(direction) {
		  	if (direction === 'up') {
		    	$section.attr('style', '').removeClass('fh5co-shadow');
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 69; }
		});

	};
	
	// Parallax
	var parallax = function() {

		$(window).stellar();

	};


	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
		    
			var $this = $(this);

			$('body').toggleClass('fh5co-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

		$('body').on('click', '#fh5co-container', function () {
		    removeBurgerMenu();

		});
		
	};

	var scrolledWindow = function() {

		$(window).scroll(function(){

			var scrollPos = $(this).scrollTop();


			$('#fh5co-home .fh5co-text').css({
		      'opacity' : 1-(scrollPos/300),
		      'margin-top' : (-212) + (scrollPos/1)
		   });

		   $('#fh5co-home .flexslider .fh5co-overlay').css({
				'opacity' : (.5)+(scrollPos/2000)
		   });

		   if (scrollPos > 300) {
				$('#fh5co-home .fh5co-text').css('display', 'none');
			} else {
				$('#fh5co-home .fh5co-text').css('display', 'block');
			}

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});
	};
	var removeBurgerMenu = function()
	{
	    if ($('body').hasClass('offcanvas-visible')) {
	        $('body').removeClass('offcanvas-visible');
	        $('.js-fh5co-nav-toggle').removeClass('active');
	    }
	}

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};


	// Page Nav
	var clickMenu = function() {
		var topVal = ( $(window).width() < 769 ) ? 0 : 58;

		$(window).resize(function(){
			topVal = ( $(window).width() < 769 ) ? 0 : 58;		
		});
		$('.fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section');

				if ( $('div[data-section="' + section + '"]').length ) {

					$('html, body').animate({
			        	scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
			    	}, 500);	
			    	
			   }

		    event.preventDefault();

		    // return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {
		
		$('.fh5co-main-nav a[data-nav-section], #fh5co-offcanvas a[data-nav-section]').removeClass('active');
		$('.fh5co-main-nav, #fh5co-offcanvas').find('a[data-nav-section="'+section+'"]').addClass('active');
		
	};

	var navigationSection = function() {

		var $section = $('div[data-section]');
		
		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}

		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};






	
	

	var foodMenusAnimate = function() {
		var menus = $('#fh5co-menus');
		if ( menus.length > 0 ) {	

			menus.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						menus.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						menus.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 500);

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var foodMenus2Animate = function () {
	    var menus = $('#fh5co-menus2');
	    if (menus.length > 0) {

	        menus.waypoint(function (direction) {

	            if (direction === 'down' && !$(this.element).hasClass('animated')) {


	                setTimeout(function () {
	                    menus.find('.to-animate').each(function (k) {
	                        var el = $(this);

	                        setTimeout(function () {
	                            el.addClass('fadeInUp animated');
	                        }, k * 200, 'easeInOutExpo');

	                    });
	                }, 200);

	                setTimeout(function () {
	                    menus.find('.to-animate-2').each(function (k) {
	                        var el = $(this);

	                        setTimeout(function () {
	                            el.addClass('fadeIn animated');
	                        }, k * 200, 'easeInOutExpo');

	                    });
	                }, 500);

	                $(this.element).addClass('animated');

	            }
	        }, { offset: '80%' });

	    }
	};
	
	var foodMenus3Animate = function () {
	    var menus = $('#fh5co-menus3');
	    if (menus.length > 0) {

	        menus.waypoint(function (direction) {

	            if (direction === 'down' && !$(this.element).hasClass('animated')) {


	                setTimeout(function () {
	                    menus.find('.to-animate').each(function (k) {
	                        var el = $(this);

	                        setTimeout(function () {
	                            el.addClass('fadeInUp animated');
	                        }, k * 200, 'easeInOutExpo');

	                    });
	                }, 200);

	                setTimeout(function () {
	                    menus.find('.to-animate-2').each(function (k) {
	                        var el = $(this);

	                        setTimeout(function () {
	                            el.addClass('fadeIn animated');
	                        }, k * 200, 'easeInOutExpo');

	                    });
	                }, 500);

	                $(this.element).addClass('animated');

	            }
	        }, { offset: '80%' });

	    }
	};


	var foodMenus4Animate = function () {
	    var events = $('#fh5co-menus4');
	    if (events.length > 0) {

	        events.waypoint(function (direction) {

	            if (direction === 'down' && !$(this.element).hasClass('animated')) {


	                setTimeout(function () {
	                    events.find('.to-animate').each(function (k) {
	                        var el = $(this);

	                        setTimeout(function () {
	                            el.addClass('fadeIn animated');
	                        }, k * 200, 'easeInOutExpo');

	                    });
	                }, 200);

	                setTimeout(function () {
	                    events.find('.to-animate-2').each(function (k) {
	                        var el = $(this);

	                        setTimeout(function () {
	                            el.addClass('fadeInUp animated');
	                        }, k * 200, 'easeInOutExpo');

	                    });
	                }, 500);

	                $(this.element).addClass('animated');

	            }
	        }, { offset: '80%' });

	    }
	};

	var foodMenus5Animate = function () {
	    var events = $('#fh5co-menus5');
	    if (events.length > 0) {

	        events.waypoint(function (direction) {

	            if (direction === 'down' && !$(this.element).hasClass('animated')) {


	                setTimeout(function () {
	                    events.find('.to-animate').each(function (k) {
	                        var el = $(this);

	                        setTimeout(function () {
	                            el.addClass('fadeIn animated');
	                        }, k * 200, 'easeInOutExpo');

	                    });
	                }, 200);

	                setTimeout(function () {
	                    events.find('.to-animate-2').each(function (k) {
	                        var el = $(this);

	                        setTimeout(function () {
	                            el.addClass('fadeInUp animated');
	                        }, k * 200, 'easeInOutExpo');

	                    });
	                }, 500);

	                $(this.element).addClass('animated');

	            }
	        }, { offset: '80%' });

	    }
	};

	var footerAnimate = function() {
		var footer = $('#fh5co-footer');
		if ( footer.length > 0 ) {	

			footer.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						footer.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						footer.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 500);

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};
	


	// Document on load.
	$(function(){

		
		//sliderMain();
		offcanvasMenu();
		mainMenuSticky();
		//parallax();
		burgerMenu();
		scrolledWindow();
		clickMenu();
		navigationSection();
		goToTop();


		// Animations
		foodMenusAnimate();
		foodMenus2Animate();
		foodMenus3Animate();
		foodMenus4Animate();
		foodMenus5Animate();
		footerAnimate();

		

	});


}());