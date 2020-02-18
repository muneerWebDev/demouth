/* preloader */
var progress = setInterval(function () {
    var $bar = $(".preloader .bar");
    var $percBar = $(".progress-perc");

    if ($percBar.width() >= 100) {
        clearInterval(progress);
    } else {
        $percBar.width($percBar.width() + (Math.random() * 10) + 1 + '%');
        var widthInPerc = ($($percBar).width() / $($bar).width()) * 100;
        $($percBar).attr('perc', Math.ceil(widthInPerc) + "%");
        console.log("barWiidth :" + $($bar).width() + " percWidth :" + $($percBar).width());
    }

}, 600);

$(window).on('load', function () {

    function preloaderFade() {
        $(".progress-perc").width(100 + '%');
        $(".preloader").fadeOut(1000);
    }

    setTimeout(function () {
        preloaderFade();
    }, 3800);

});

$('.intro .wrapper').ripples({
    resolution: 200,
    dropRadius: 10,
    perturbance: 0.005,
    interactive: true,
    crossOrigin: ''
});

$(document).ready(function () {

    $(".hamburger").click(function () {
        $(this).toggleClass("change");
    });

    sec = 0;

    window.setInterval(function () {
        sec += 1;
        $(".slidingAnimation.animateLoader span").css("background-position", sec + "px 0");
    }, 15);

    window.setInterval(function () {
        sec += 1;
        $(".slidingAnimation.animate span, .scroll-btn").css("background-position", sec + "px 0");
    }, 500);



    //detect mouse wheel scroll direction
    $(window).bind('mousewheel DOMMouseScroll', function (event) {

        var pageHeight = $(document).height();
        var screenHeight = $(window).height();
        var currentScrollPos = $(window).scrollTop();

        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

            // scroll up
            if (currentScrollPos > screenHeight/2) {
                var scrollTo = $(window).scrollTop() - $(window).height();
                $('html, body').animate({
                    scrollTop: scrollTo
                }, 900);

            }

        } else {

            // scroll down
            if (currentScrollPos < pageHeight) {
                var scrollTo = $(window).scrollTop() + $(window).height();
                $('html, body').animate({
                    scrollTop: scrollTo
                }, 900);
            }

        }
    });


    $(".scroll-btn").click(function () {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 900);
    });
      

});

//AOS Animatiion init
AOS.init({
    duration: 1500,
  })