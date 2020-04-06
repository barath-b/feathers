$(document).ready(function () {
    $(function () {
        nice = $("body").niceScroll({
            cursorcolor: "#E20F37",
            cursorwidth: "10px",
            cursorborder: "none",
            cursorborderradius: "5px",
            scrollspeed: 100,
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
        var targetHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top
        }, { duration: 1500, easing: 'easeOutQuint' });
        e.preventDefault();
    });
    $(document).on("scroll", onScroll);
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