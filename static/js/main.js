$(document).ready(function () {
    new TypeIt('#whoIAm', {
        strings: [' Raaghav.', ' an aspiring product manager.', ' a pianist.', ' a theme park enthusiast.', ' an aviation geek.', ' Raaghav.'],
        breakLines: false,
        nextStringDelay: 2000,
        startDelay: 1000
	}).go();
});

var graphicTimeLine = new TimelineMax();
$(document).ready(function () {
    graphicTimeLine.staggerFrom('#Layer_1 > g:nth-child(3) > g:nth-child(5) > g path', 1, {drawSVG:"50% 50%", fill: "transparent"}, 0.03)
    .staggerFrom('#Layer_1 > g:nth-child(3) > g:nth-child(1) > g path', 0.3, {scale: 0}, 0.1)
    .staggerFrom('#Layer_1 > g:nth-child(3) > g:nth-child(3) > g path', 0.3, {scale: 0}, -0.2)
    .staggerFrom('#Layer_1 > g:nth-child(3) > g:nth-child(4) > g path', 0.3, {scale: 0}, 0.1)
    .from('#peachQutub', 0.2, {scale: 0})
        .from('.sunset', 1, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.3})
        .from('.st2, .st3, .st4, .st5', 0.7, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
        .from('#ocean', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
        .staggerFrom('#Layer_1 > g:nth-child(2) > g > g.st7', 0.35, {scaleY: 0}, -0.1)
        .from('#cloudOne, #cloudFive', 0.5, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut})
        .from('#cloudTwo, #cloudFour, #cloudThree', 0.3, {scaleY:0, transformOrigin: "bottom", ease: Bounce.easeOut})
        .from('.st9', 4, {fill: "none !important", drawSVG:"50% 50%", ease: Power1.easeOut})
        // .from('.st7', 3, {scaleX: 0, transformOrigin: "center", ease: SloMo.easeOut})
    // graphicTimeLine.staggerFrom('#Layer_1 > g > g:nth-child(5) > g path', 1, {drawSVG:"50% 50%", fill: "transparent"}, -0.05)
    // .staggerFrom('#Layer_1 > g > g:nth-child(1) > g path', 0.5, {scale: 0}, 0.2)
    // .staggerFrom('#Layer_1 > g > g:nth-child(3) > g path', 0.5, {scale: 0, delay: 0.3}, -0.2)
    // .staggerFrom('#Layer_1 > g > g:nth-child(4) > g path', 0.5, {scale: 0, delay: 0.3}, 0.1)
    // .from('.st1', 0.5, {scale: 0})
    // .from('#leftBase, #rightBase', 0.75, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
    // .from('#bigFrame', 0.7, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut})
    // .from('#smallFrame', 0.7, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut})
    // .from('#ears, #frontEar', 0.7, {scaleY: 0, transformOrigin: "bottom", ease: SlowMo.easeOut, delay: 0.2})
    // .from('#poleOne', 0.3, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.1})
    // .from('#poleTwo', 0.3, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.1})
    // .from('#poleThree', 0.3, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.1})
    // .from('#leftBackRope', 0.5, {scale: 0, delay: 0.1, ease: Power2.easeOut})
    // .from('#rightBackRope', 0.5, {scaleX: 0, transformOrigin: "left", ease: Power2.easeOut})
    // .from('#leftFrontRope', 0.5, {scale: 0, delay: 0.3})
    // .from('#rightFrontRope', 0.5, {scaleX: 0, transformOrigin: "left", ease: Power2.easeOut})
});

// $(function() {
//     $(".navigation__icon").click(function() {
//         $('.navigation').toggleClass('navigation-open')
//     });
// });

$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        $('.nav-link').toggleClass('open');
    });

    var menuAnimate = new TimelineMax()
    $('.top-nav.open').ready(function () {
        menuAnimate.staggerFrom('.nav-list', 0.5, {scale: 0}, 0.3)
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        $('.nav-link').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
        });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
    });

    AOS.init({
        easing: 'ease',
        duration: 700,
        once: true
    });
});
