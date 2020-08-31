$(document).ready(function () {

    
        // hide .go_to_top first
        $(".go_to_top").hide();
        // fade in .go_to_topp
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.go_to_top').fadeIn();
            }
            else {
                $('.go_to_top').fadeOut();
            }
        });
        // scroll body to 0px on click

        function go_to_top() {
            //js for scroll to section content
            $('.go_to_top a[href^="#"],.appointment a[href^="#"]').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 80
                    }, 2000);
                }
            });
        }

        go_to_top();
        

    $('.fitmeFitWrap .tabMenu .nav-tabs a').on('click', function(e){
        var tab_height = $('.fitTabContent .tab-content .sliderItem').outerHeight();
        console.log(tab_height);
        $('.fitTabContent .tab-content').css({
            'height': tab_height + 'px',
        });
    });
    
	function scrollTopFixed(htOp) {
		var windowTop = $(window).scrollTop();
		var adDcl = "fixedMenu";
		if (windowTop > 0) {
			if (!(htOp.hasClass(adDcl))) {
				htOp.stop();
				htOp.addClass(adDcl);
			}
		}
		else {
			if (htOp.hasClass(adDcl)) {
				htOp.stop();
				htOp.removeClass(adDcl);
			}
		}
	}
	
	$(window).scroll(function () {
		var htOp = $('.header');
		scrollTopFixed(htOp);
	});
		

    function popUpRemove() {
        setTimeout(removeClass, 100);
        setTimeout(addClass, 10000);
        function removeClass() {
            $('.popupWrap').removeClass("popup");
        }
        function addClass() {
            $('.popupWrap').addClass("popUpRemove");
        }
        $(".closePopup").on('click', function(){
            $('.popupWrap').addClass("popUpRemove");
        });
    }
    popUpRemove();

    //js for bannerTextSlider
    function bannerTextSlider() {
        $('.bannerTextSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            arrows: false,
            fade: true,
            dots: false,
            asNavFor: '.bannerVideoSlider',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {

                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
    }
    // bannerTextSlider();

    //js for bannerVideoSlider
    function bannerVideoSlider() {
        $('.bannerVideoSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            arrows: false,
            dots: true,
            // asNavFor: '.bannerTextSlider',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        dots: false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        dots: false,
                    }
                }
            ]
        });
    }
    bannerVideoSlider();


    function fitmeDegitalPlatformSlider() {
        $(".fitmeDegitalPlatformSlider").slick({
            autoplay: true,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    // fitmeDegitalPlatformSlider();


    function physicalFitSlider() {
        $(".physicalFitSlider").slick({
            // autoplay: true,
            slidesToShow: 3,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 1050,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    physicalFitSlider();

    function DigitalContentVideoSlider() {
        $(".DigitalContentVideoSlider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    DigitalContentVideoSlider();


    function clientSlider() {
        $(".clientSlider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            arrows: true,
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    clientSlider();


    function logoSlider() {
        $(".logoSlider").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }
    logoSlider();


    function popupGallery() {
        if ($('.popup-youtube').length) {
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
            });
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }
    popupGallery();




    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



});