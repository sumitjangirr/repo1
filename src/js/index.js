$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3000,
        pause: "false"
    });



    if ($(window).width() <= 992) {
        $('#menu').click(function() {

            $('.menu-container').slideToggle("slow");

        });
        $('.navigation li').click(function() {

            $(this).find(' ul').slideToggle("slow");
        });
    }

    $(".navigation > li").hover(
        function() {
            $(this).addClass("active");
        },
        function() {
            $(this).removeClass("active");
        }
    );

    $(".navigation li").on('click', 'a', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 58
        }, 500);
    });


});