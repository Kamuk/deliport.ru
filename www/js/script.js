//LOADER/SPINNER
$(window).bind("load", function() {

	"use strict";
	
	$(".spn_hol").fadeOut(1000);
});


//MENU APPEAR AND HIDE
$(document).ready(function() {

	"use strict";
	
	$(window).scroll(function() {

		"use strict";
		
		if ($(window).scrollTop() > 80) {
			$(".navbar").css({
				'margin-top': '0px',
				'opacity': '1'
			})
			$(".navbar-nav>li>a").css({
				'padding-top': '15px'
			});
			$(".navbar-brand img").css({
				'height': '35px'
			});
			$(".navbar-brand img").css({
				'padding-top': '0px'
			});
			$(".navbar-default").css({
				'background-color': 'rgba(59, 59, 59, 0.7)'
			});
		} else {
			$(".navbar").css({
				'margin-top': '-100px',
				'opacity': '0'
			})
			$(".navbar-nav>li>a").css({
				'padding-top': '45px'
			});
			$(".navbar-brand img").css({
				'height': '45px'
			});
			$(".navbar-brand img").css({
				'padding-top': '20px'
			});
			$(".navbar-default").css({
				'background-color': 'rgba(59, 59, 59, 0)'
			});
		}
	});
});




 // MENU SECTION ACTIVE
$(document).ready(function() {

	"use strict";
	
	$(".navbar-nav li a").click(function() {

		"use strict";
		
		$(".navbar-nav li a").parent().removeClass("active");
		$(this).parent().addClass("active");
	});
});



// Hilight MENU on SCROLl

$(document).ready(function() {

	"use strict";
	
	$(window).scroll(function() {

		"use strict";
		
		$(".page").each(function() {

			"use strict";
			
			var bb = $(this).attr("id");
			var hei = $(this).outerHeight();
			var grttop = $(this).offset().top - 70;
			if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
				var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
			} else {
				var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
			}
		});
	});
});



//SMOOTH MENU SCROOL


$(function() {
	
	"use strict";

  $('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
});



// FIX HOME SCREEN HEIGHT
$(document).ready(function() {

	"use strict";
	
	setInterval(function() {

		"use strict";
		
		var widnowHeight = $(window).height();
		var containerHeight = $(".home-container").height();
		var padTop = widnowHeight - containerHeight;
		$(".home-container").css({
			'padding-top': Math.round(padTop / 2) + 'px',
			'padding-bottom': Math.round(padTop / 2) + 'px'
		});
	}, 10)
});



//PARALLAX
$(document).ready(function() {

	"use strict";

	$(window).resize(function() {
		width = $(window).width();
		if (width > 768) {
			$(window).bind('load', function() {
				"use strict";
				parallaxInit();
			});

			function parallaxInit() {
				"use strict";
				$('.home-parallax').parallax("30%", 0.1);
				$('.subscribe-parallax').parallax("30%", 0.1);
				$('.testimonial').parallax("10%", 1);
				/*add as necessary*/
			}
		} else {
			$('#HOME').removeClass('parallax');
			$('#HOME').removeClass('home-parallax');
			$('.testimonial').removeClass('parallax');
			$('.fun_facts').removeClass('parallax');
		}
	});
	
	
});


//REVIEWS
$(document).ready(function() {
	$("#review_1").change(function(){
	    if(!this.checked){
	    	$(".review.open_1").removeClass('active');
	    	$(".review.close_1").addClass('active');
	    	$(".review_text_1").removeClass('active');
	    }else{
			$(".review.close_1").removeClass('active');
	    	$(".review.open_1").addClass('active');
	    	$(".review_text_1").addClass('active');
	    }
	});
	$("#review_2").change(function(){
	    if(!this.checked){
	    	$(".review.open_2").removeClass('active');
	    	$(".review.close_2").addClass('active');
	    	$(".review_text_2").removeClass('active');
	    }else{
			$(".review.close_2").removeClass('active');
	    	$(".review.open_2").addClass('active');
	    	$(".review_text_2").addClass('active');
	    }
	});
	$("#review_3").change(function(){
	    if(!this.checked){
	    	$(".review.open_3").removeClass('active');
	    	$(".review.close_3").addClass('active');
	    	$(".review_text_3").removeClass('active');
	    }else{
			$(".review.close_3").removeClass('active');
	    	$(".review.open_3").addClass('active');
	    	$(".review_text_3").addClass('active');
	    }
	});
});


//OWL CAROSEL
$(document).ready(function() {

	"use strict";
	
	$("#owl-demo").owlCarousel({
		autoPlay: 3000,
		items: 4, //10 items above 1000px browser width
		itemsDesktop: [1370, 3], //5 items between 1000px and 901px
		itemsDesktopSmall: [900, 2], // betweem 900px and 601px
		itemsTablet: [600, 1], //2 items between 600 and 0
	});
});


	
 //PRETTYPHOTO

$(document).ready(function() {

	"use strict";

	$("a[rel^='prettyPhoto']").prettyPhoto({
		show_title: false,
		/* true/false */
	});
});



//WOW JS
$(document).ready(function() {

	"use strict";
 
	new WOW().init();
});



//RESPONSIVE VIDEO
$(document).ready(function() {

	"use strict";
	
	// Basic FitVids Test
	$(".video").fitVids();
});


//Маска для формы отправки заявки
$(document).ready(function() {

  $("#phone").mask("+7(999) 999-9999");
});


//CONTACT FORM VALIDATION
$(document).ready(function() {

	"use strict";
	
	$(".form_submit").click(function() {

		"use strict";
		
		var name = $("#name").val();
		var phone = $("#phone").val();
		var emaild = $("#email").val();
		var whence = $("#whence").val();
		var where = $("#where").val();
		var weight = $("#weight").val();
		var date = $("#date").val();
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		if (!name) {
			$(".form_error .name_error").addClass("show").removeClass("hide");
		} else {
			$(".form_error .name_error").addClass("hide").removeClass("show");
		}
		if (!phone) {
			$(".form_error .phone_error").addClass("show").removeClass("hide");
		} else {
			$(".form_error .phone_error").addClass("hide").removeClass("show");
		}
		if (!emaild) {
			$(".form_error .email_error").addClass("show").removeClass("hide");
		} else {
			$(".form_error .email_error").addClass("hide").removeClass("show");
			if (testEmail.test(emaild)) {
				$(".form_error .email_val_error").addClass("hide").removeClass("show");
			} else {
				$(".form_error .email_val_error").addClass("show").removeClass("hide");
			}
		}
		if (!whence) {
			$(".form_error .whence_error").addClass("show").removeClass("hide");
		} else {
			$(".form_error .whence_error").addClass("hide").removeClass("show");
		}
		if (!where) {
			$(".form_error .where_error").addClass("show").removeClass("hide");
		} else {
			$(".form_error .where_error").addClass("hide").removeClass("show");
		}
		if (!weight) {
			$(".form_error .weight_error").addClass("show").removeClass("hide");
		} else {
			$(".form_error .weight_error").addClass("hide").removeClass("show");
		}
		if (!date) {
			$(".form_error .date_error").addClass("show").removeClass("hide");
		} else {
			$(".form_error .date_error").addClass("hide").removeClass("show");
		}

		if (name && phone && emaild && whence && where && weight && date) {
			$.ajax({
				url: 'contact.php',
				data: {
					name: name,
					phone: phone,
					emaild: emaild,
					whence: whence,
					where: where,
					weight: weight,
					date: date
				},
				dataType: 'json',
				type: 'POST',
				beforeSend: function(){
					$('.contact_form .preloader').addClass("show").removeClass("hide");;
				},
				success: function( data, textStatus, jqXHR ) {
					$('.contact_form .preloader').addClass("hide").removeClass("show");
					if(data.info == 'error'){
						$(".Error").show();
						$(".Error").html("<i class='fa fa-close'></i>" + data.msg);
					}
					if(data.info == 'success'){
						console.log(data.msg);
						$(".Sucess").show();
						$(".Sucess").html("<i class='fa fa-check'></i> Уважаемый <b> " + name + "</b>" + " " + data.msg);
					}
					$("#Name").val("");
					$("#Phone").val("");
					$("#Email").val("");
					$("#Whence").val("");
					$("#Where").val("");
					$("#Weight").val("");
					$("#Date").val("");
					$(".form_error .name_error, .form_error .phone_error , .form_error .email_error, .form_error .email_val_error, .form_error .whence_error, .form_error .where_error, .form_error .weight_error, .form_error .date_error").addClass("hide").removeClass("show");
					$("#name").val("");
					$("#phone").val("");
					$("#email").val("");
					$("#whence").val("");
					$("#where").val("");
					$("#weight").val("");
					$("#date").val("");
				}
			});
		} else {
			$(".Error").hide();
			$(".Sucess").hide();
		}

		return false;
	});
});


 
/// SMOOTH SCROLL           

$(document).ready(function() {

	"use strict";
	
	var scrollAnimationTime = 1200,
		scrollAnimation = 'easeInOutExpo';
	$('a.scrollto').bind('click.smoothscroll', function(event) {
		event.preventDefault();
		var target = this.hash;
		$('html, body').stop().animate({
			'scrollTop': $(target).offset().top
		}, scrollAnimationTime, scrollAnimation, function() {
			window.location.hash = target;
		});
	});
	//COUNTER
	$('.counter_num').counterUp({
		delay: 1,
		time: 150
	});
});
