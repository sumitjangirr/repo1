$(document).ready(function() {
    $(".navigation > li").hover(
        function() {
            $(this).addClass("active");
        },
        function() {
            $(this).removeClass("active");
        }
    );

    if ($(window).width() <= 992) {
        $('#menu').click(function() {
            $('.menu-container').slideToggle("slow");
        });
        $('.navigation li').click(function() {
            $(this).find(' ul').slideToggle("slow");
        });
    }
});