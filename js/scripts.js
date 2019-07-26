$( document ).ready(function() {
    var header = $("header");
    var nav = $(".main-nav");
    var fa = $(".fa");
    var logo = $(".logo");

    nav.hide();
    logo.addClass("scroll-border");

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 0) {
            header.addClass("header-alt");
            nav.show();
            fa.addClass("scroll-color");
            logo.removeClass("scroll-border");
        } else {
            header.removeClass("header-alt");
            fa.removeClass("scroll-color");
        }
    });
});