$(document).ready(function() {
   $("#header .js-toggle-menu").click(function() {
		$("#header").toggleClass("sticky open");
	});
	
	$("#main-menu li").click(function() {
		$("#main-menu li").removeClass("active");
		$(this).addClass("active");
		$(this).parent().parent().addClass("active");
	});
	
	$("#main-menu li").hover(
		function() {
			$(this).addClass("menu-hover");
		},
		function() {
			$(this).removeClass("menu-hover");
		}
	);
	$(window).scroll(function () {
		if ($(window).scrollTop() != 0) {
			$("body").addClass("sticky");		
			$('.gotop').fadeIn();
		} else {
			$("body").removeClass("sticky");
			$('.gotop').fadeOut();
		}
	});
	$(document).ready(function(){
		$(".gotop").fadeOut(0);
		$(".gotop").click(function() {
			$('html, body').animate({
				scrollTop: $(".site").offset().top
			}, 1000);
		});
		
	});
	$(".anim-h").hover(
		function() {
			$(this).parent().addClass("active-hover");
		},
		function() {
			$(this).parent().removeClass("active-hover");
		}
	);
	$(".anim-h-h").hover(
		function() {
			$(this).parent().parent().addClass("active-hover");
		},
		function() {
			$(this).parent().parent().removeClass("active-hover");
		}
	);
	$(".pic-img").hover(
		function() {
			$(this).parent().addClass("active-hover");
		},
		function() {
			$(this).parent().removeClass("active-hover");
		}
	);
	$(document).ready(function(){
		$('a[href="#search"]').on('click', function(event) {                    
			$('#search').addClass('open');
			$('#search > form > input[type="search"]').focus();
		});            
		$('#search, #search button.close').on('click keyup', function(event) {
			if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
				$(this).removeClass('open');
			}
		});            
	});
});

