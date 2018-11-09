$(function(){

 $(window).scroll(function(){
    if($(window).scrollTop() >= $("#first").offset().top && $(window).scrollTop() < $("#second").offset().top ){
        $(".navigator ul li").css("display","block");
        $(".about").addClass("hide");
        $(".nav-bar").addClass("block");
        $(".works, .hobbies").removeClass("hide");
    } else if ($(window).scrollTop() >= $("#second").offset().top && $(window).scrollTop() < $("#third").offset().top ){
        $(".navigator ul li").css("display","block");
        $(".works").addClass("hide");
        $(".about, .hobbies").removeClass("hide");
    } else if ($(window).scrollTop() >= $("#third").offset().top && $(window).scrollTop() < $("#forth").offset().top ){
        $(".navigator ul li").css("display","block");
        $(".hobbies").addClass("hide");
        $(".works, .worlds").removeClass("hide");
    } else if ($(window).scrollTop() >= $("#forth").offset().top && $(window).scrollTop() < $("#fifth").offset().top ){
        $(".navigator ul li").css("display","block");
        $(".worlds").addClass("hide");
        $(".hobbies, .links").removeClass("hide");
    } else if ($(window).scrollTop() >= $("#fifth").offset().top ){
        $(".navigator ul li").css("display","block");
        $(".links").addClass("hide");
        $(".worlds").removeClass("hide");
    } else {
        $(".navigator ul li").css("display","inline-block");
        $(".about, .works, .hobbies").removeClass("hide");
    }


 });
});
