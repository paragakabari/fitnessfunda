(function ($) {
    "use strict";
	
	jQuery(document).ready(function() {

		//Sticky Header
		// $(".fixed-top").sticky({
  //           stopSpacing: 0,
  //           wrapperClassName: 'sticky-top',
  //       });
		$(".fixed-after-scroll").sticky({
            topSpacing: 0,
            wrapperClassName: 'sticky-header-bottom',
        });

		//Add Header Background after Scroll
		$(window).on("scroll",function(){
			var pagescroll = $(window).scrollTop();
			if(pagescroll > 100){
				$(".header-area").removeClass("transparent-bg");
			}else{
				$(".header-area").addClass("transparent-bg");
			}
		});
		
		//Search Trigger
		$(".search-trigger i").on("click", function() {
            $(".top-search").addClass("show");
        });
        
        $(".search-close-trigger i").on("click", function() {            
            $(".top-search").removeClass("show");
        });

		// HOME PAGE SLIDER
		$(".slider-area").owlCarousel({
			loop:true,
		    nav:true,
		    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		    items:1,		    
		    dots: true,
		    autoplay:true,
		    autoplayTimeout:3000,
		    mouseDrag: false,
            touchDrag: false,
		});

		$(".slider-area").on("translate.owl.carousel", function(){
            $(".single-slide h1, .single-slide p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide h2, .single-slide .ven-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".slider-area").on("translated.owl.carousel", function(){
            $(".single-slide h1, .single-slide p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide h2, .single-slide .ven-btn").addClass("animated fadeInDown").css("opacity", "0");
        });

		var sliderdot = $(".slider-area .owl-dot");
		sliderdot.each(function () {
			var dotnumber = $(this).index() +1;
			if(dotnumber <10){
				$(this).html('0').append(dotnumber);
			}else{
		  		$(this).html(dotnumber);
			}
		});

		// Counter Up
		$(".count-number").counterUp({
            delay: 10,
            time: 1000
        });

        //Isotop Js
        $(".isotpo-mobile-title").on('click', function(){
	      $(this).toggleClass("active").next(".work-filter-btn").slideToggle();
	      return false;
	    });

	    var $grid = $(".work-item-wrapper").isotope({
	      itemSelector: ".single-work-item",
	      percentPosition: true,
	      masonry: {
	        columnWidth: 1
	      }
	    });        

	    $(".work-filter-btn li").on("click", function() {    
	      if($(this).hasClass("active")) return false;
	      $(".isotpo-mobile-title, .work-filter-btn li").removeClass("active");
	      $(this).addClass("active");
	      $(".isotpo-mobile-title").text($(this).find(".title-text").text());
	      if($(".isotpo-mobile-title").is(":visible")) $(".work-filter-btn").slideUp();
	      var filterValue = $(this).attr("data-filter");
	      $grid.isotope({ filter: filterValue });
	    });

	    // Team Carousel
		$(".team-carousel.team-member-wrapper").owlCarousel({
			loop:true,
		    nav:true,
		    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		    margin: 30,
		    items:4,		    
		    dots: false,
		    autoplay:true,
		    autoplayTimeout:3000,
		    responsive:{
		    	0:{
		    		items:1
		    	},
		    	768:{
		    		items:3
		    	},
		    	992:{
		    		items:4
		    	}
		    }
		});

		$(".team-carousel2.team-member-wrapper").owlCarousel({
			loop:true,
		    nav:true,
		    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		    margin: 30,
		    items:3,		    
		    dots: false,
		    autoplay:true,
		    autoplayTimeout:3000,
		    responsive:{
		    	0:{
		    		items:1
		    	},
		    	768:{
		    		items:3
		    	}
		    }
		});

		// Testimonial Carousel
		$(".testimonial-wraper").owlCarousel({
			loop:true,
		    nav:true,
		    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		    items:1,		    
		    dots: false,
		    autoplay:true,
		    autoplayTimeout:3000,
		});

		$(".client-testimonial-style-3-wrapper").owlCarousel({
			loop:true,
		    nav:false,
		    items:3,		    
		    dots: true,
		    margin: 30,
		    autoplay:true,
		    autoplayTimeout:3000,
		    responsive:{
		    	0:{
		    		items:1
		    	},
		    	768:{
		    		items:3
		    	}
		    }
		});

		// Clients Carousel
		$(".client-carousel-wrapper").owlCarousel({
			loop:true,
		    nav:false,
		    items:6,
		    margin: 30,		    
		    dots: false,
		    autoplay:true,
		    autoplayTimeout:3000,
		    responsive:{
		    	0:{
		    		items:2
		    	},
		    	480:{
		    		items:3
		    	},
		    	768:{
		    		items:6
		    	}
		    }
		});

		//Skill bar
		$(".skillbar").each(function() {
			$(this).appear(function() {
				$(this).find(".count-bar").animate({
					width:$(this).attr("data-percent")
				},3000);
			});
		});

		//Single Page Carousel
		$(".single-item-slider").flexslider({
	        animation: "slide",
	        controlNav: "thumbnails",
	        slideshowSpeed: 3000
		});

		//Load More
		$(".load-more-item").slice(0, 4).show();
        $("#loadMore").on("click", function (e) {
            e.preventDefault();
            $(".load-more-item:hidden").slice(0, 4).slideDown();
            if ($(".load-more-item:hidden").length == 0) {
                $("#loadMore").fadeOut("slow");
            }
        });

        //Mobile Menu
        $(".main-menu").slicknav({
            prependTo: "#mobile-menu-wrap",
            label: ''
        });

        //Wow
        new WOW().init();

        //Scroll Top
        $.scrollUp({
	        scrollName: "scrollUp",
	        scrollDistance: 1000,
	        scrollFrom: "top",
	        scrollSpeed: 800,
	        scrollText: '',
	        zIndex: 100
	    });
	});

	jQuery(window).load(function (){
        $("#preloader").fadeOut(500);
    });

    $('.news-scroller li a').on('click', function(){
		var anchor = $(this).attr('href');
		var offsetTop = $(anchor).offset().top - ($('.header-bottom').height() + 40);
		$('html, body').animate({ scrollTop: offsetTop}
		, 1000);
	});
	$('.news-scroller li').on('click',function(){
  		$('.news-scroller li.active').removeClass('active')
  		$(this).addClass('active');
	});



    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();
  
    // Account for home page with empty path
    if ( path == '' ) {
        path = 'index.html';
    }
	  
    var target = $('#header-menu ul li a[href="'+path+'"]');
    // Add active class to target link
    target.parent("li").addClass('active');





    // --------sign-up-step---------------
	    $('.nav-tabs > li a[title]').tooltip();
	    
	    //Wizard
	    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

	        var $target = $(e.target);
	    
	        if ($target.parent().hasClass('disabled')) {
	            return false;
	        }
	    });

	    $(".next-step").click(function (e) {

	        var $active = $('.wizard .nav-tabs li.active');
	        $active.next().removeClass('disabled');
	        $active.prev().addClass('done');
	       	$active.addClass('done');
	        nextTab($active);

	    });
	    $(".prev-step").click(function (e) {

	        var $active = $('.wizard .nav-tabs li.active');
	        prevTab($active);

	    });


		function nextTab(elem) {
		    $(elem).next().find('a[data-toggle="tab"]').click();
		}
		function prevTab(elem) {
		    $(elem).prev().find('a[data-toggle="tab"]').click();
		}

})(jQuery);



