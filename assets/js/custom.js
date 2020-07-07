$(document).ready(function () {

    

	//js for latest_news_slider
	$('.bannerTextSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		centerMode: true,
		centerPadding: '0px',
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
   
	//js for latest_news_slider
	$('.bannerVideoSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		dots: false,
		asNavFor: '.bannerTextSlider',
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


    function fitmeDegitalPlatformSlider() {
        $(".fitmeDegitalPlatformSlider").slick({
            centerMode: true,
            autoplay: true,
            centerPadding: '0px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    // fitmeDegitalPlatformSlider();


    function physicalFitSlider() {
        $(".physicalFitSlider").slick({
            centerMode: true,
            autoplay: true,
            centerPadding: '0px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
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
            arrows: false,
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
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
            arrows: true,
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
});