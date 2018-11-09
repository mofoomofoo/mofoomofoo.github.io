$(function(){

 $(window).scroll(function(){
    if($(window).scrollTop() > $("#first").offset().top && $(window).scrollTop() < $("#second").offset().top ){
        $(".about").addClass("bigger");
        $(".works, .hobbies").removeClass("bigger");
    } else if ($(window).scrollTop() > $("#second").offset().top && $(window).scrollTop() < $("#third").offset().top ){
        $(".works").addClass("bigger");
        $(".about, .hobbies").removeClass("bigger");
    } else if ($(window).scrollTop() > $("#third").offset().top && $(window).scrollTop() < $("#forth").offset().top ){
        $(".hobbies").addClass("bigger");
        $(".works, .worlds").removeClass("bigger");
    } else if ($(window).scrollTop() > $("#forth").offset().top && $(window).scrollTop() < $("#fifth").offset().top ){
        $(".worlds").addClass("bigger");
        $(".links, .hobbies").removeClass("bigger");
    } else if ($(window).scrollTop() > $("#fifth").offset().top ){
        $(".links").addClass("bigger");
        $(".worlds").removeClass("bigger");
    } else {
        $(".about, .works, .hobbies").removeClass("bigger");
    }


 });
});
