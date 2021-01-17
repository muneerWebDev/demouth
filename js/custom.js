/* preloader */
var $bar = $(".preloader .bar");
var $percBar = $(".progress-perc");

var progress = setInterval(function () {

    if ($percBar.width() >= 100) {
        clearInterval(progress);
    } else {
        var newWidth = $percBar.width() + (Math.random() * 10);
        $percBar.width(newWidth + '%');

        $($percBar).attr('perc', Math.ceil(newWidth) + "%");
        console.log("barWiidth :" + $($bar).width() + " percWidth :" + $($percBar).width());
    }

}, 600);

function preloaderFade() {
    $(".progress-perc").width(100 + '%');
    $($percBar).attr('perc', 100 + "%");
    $(".preloader").fadeOut(1000);
}


$(window).on('load', function () {

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

    setUpTextEffect()

    $("html").easeScroll({
        animationTime: 2000,
        stepSize: 80,
    });

    $(".scroll-btn").click(function () {
        $('html, body').stop();
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 900);
    });


    sec = 0;
    window.setInterval(function () {
        sec += .000000000001;
        $(".scroll-btn").css("background-position", sec + "px 0");
    }, 0);
});

//AOS Animatiion init
AOS.init({
    duration: 1500,
})

var setUpTextEffect = () => {
    setTimeout(function () {
        showAnimation()
    }, 6000);

}


var showAnimation = () => {
    sec = 0;
    var firstAnim = window.setInterval(function () {
        sec += 1;
        $(".slidingAnimation.animateLoader span").css("background-position", sec + "px 0");
    }, 15);

    var secondAnim = window.setInterval(function () {
        sec += .000000000001;
        $(".slidingAnimation.animate span").css("background-position", sec + "px 0");
    }, 0);


    setTimeout(function () {
        clearInterval(firstAnim);
        clearInterval(secondAnim);
        setUpTextEffect()
    }, 3000);

}
