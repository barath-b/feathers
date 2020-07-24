$(document).ready(function () {
    $(function () {
        nice = $("body").niceScroll({
            cursorcolor: "#E20F37",
            cursorwidth: "10px",
            cursorborder: "none",
            cursorborderradius: "5px",
            scrollspeed: 200,
            mousescrollstep: 40,
            hwacceleration: true,
            autohidemode: false,
            background: "#202020",
            spacebarenabled: true,
            enablemousewheel: true,
            enablekeyboard: true,
        });
    });

    document.getElementById("menu").addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
    });

    $('#links li a').click(function (e) {
        $('.header').removeClass('active');
        var targetHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top + .1
        }, { duration: 1500, easing: 'easeOutQuint' });
        e.preventDefault();
    });

    $(document).on("scroll", function () {
        onScroll();
        setInView();
    });
    var ar = document.querySelectorAll(".hasoverlay");
    ar.forEach(e => {
        $(e).wrap('<div class="wrap"></div>');
        $('<div class="overlay"></div>').insertAfter(e);
    });
    var ar = document.querySelectorAll(".imgoverlay");
    ar.forEach(e => {
        $('<div class="overlay"></div>').insertAfter(e);
    });
    setInView();
    gsap.to("#container", 0.5, { display: "block", ease: Power4.easeIn })
    gsap.to("#overlay", 0.5, { display: "none", autoalpha: 0, ease: Power4.easeIn })
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#links li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#links li').removeClass("active");
            currLink.parent().addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

function testInView(el) {
    var wTop = $(window).scrollTop();
    var wBot = wTop + $(window).height();
    var eTop = el.offset().top;
    var eBot = eTop + (el.height() / 2);
    return ((eBot <= wBot) && (eTop >= wTop));
}

function setInView() {
    $(".overlay").each(function () {
        var el = $(this);
        if (testInView(el)) {
            var dur = $(this).prev().data("animDur");
            var del = $(this).prev().data("animDelay");
            gsap.to(el, { x: "120%", duration: dur / 2, delay: del, ease: CustomEase.create("custom", "M0,0 C0,0 0.159,0.057 0.208,0.238 0.244,0.375 0.277,0.608 0.41,0.728 0.41,0.728 0.516,0.847 0.608,0.89 0.782,0.97 1,1 1,1") });
        }
    });
}