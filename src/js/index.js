$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3000
    });



    if ($(window).width() <= 992) {
        $('#menu').click(function() {

            $('.menu-container').slideToggle();

        });
        $('.navigation li').click(function() {

            $(this).find(' ul').slideToggle();
        });
    }


});