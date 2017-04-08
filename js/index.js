$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3000,
        pause: "false"
    });

    $("#header").load("header.html", function() {
        //set active class on the basis of URL
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
        console.log(pgurl);

        if (pgurl != "") {
            $("*").find("a[href='" + pgurl + "']").each(function() {
                $(this).closest("li.parentMenu").addClass("activeMenu");
            });
        } else {
            $(".navigation>li.parentMenu:eq(0)").addClass("activeMenu");
        }
        //end


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
            event.stopPropagation();

            if ($(this).attr("href") == "javascript:0") {
                return;
            }


            if ($($.attr(this, 'href')).length > 0) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 104
                }, 1500);
            }

            location.replace(window.location.origin + "/" + $(this).attr("href"));
        });
    });
    $("#footer").load("footer.html");

    if ($(window).width() <= 992) {
        $('#menu').click(function() {

            $('.menu-container').slideToggle("slow");

        });
        $('.navigation li').click(function() {

            $(this).find(' ul').slideToggle("slow");
        });
    }

    $('.flexslider').flexslider({
        animation: "slide"
    });

    $('#gallery ul li').click(function() {
        var src = $(this).find('img').attr('src');
        $('.pop-up').css('display', 'block');
        $('body').css('overflow', 'hidden');
        $('.pop-up img').attr('src', src)
    });
    $('.pop-up i').click(function() {
        $('body').css('overflow', 'auto');
        $('.pop-up').css('display', 'none');
        $('.pop-up img').attr('src', ' ')
    });

});