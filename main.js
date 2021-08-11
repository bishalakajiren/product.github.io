

/* Please ❤ this if you like it! */


(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery); 

  let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000,
    loop: true,
    endDelay: 500
  }); 
  
  tl.add({
    targets: '.foxhead',
    scale: [0.75, 1],
    opacity: [0, 1],
  })
  .add({
    targets: '.foxpart',
    opacity: [0, 1],
    delay: anime.stagger(200),
    easing: 'easeInExpo',
  }, '-=2000')
  .add({
    targets: '#name-g path',
    opacity: [0, 1],
    translateX: [-25, 0],
    rotate: ['-45deg', 0],
    delay: anime.stagger(100),
  }, '-=500')
  .add({
    targets: 'svg',
    opacity: [1, 0],
  });