$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3000
    });



    if ($(window).width() < 992) {
        $('#menu').click(function() {

            $('.menu-container').toggleClass('active');

        });
        $('.navigation li').click(function() {

            $(this).find(' ul').slideToggle(500);
        });
    }


});