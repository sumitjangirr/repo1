// create the module and name it krishiphalApp
var krishiphalApp = angular.module('krishiphalApp', ['ngRoute']);

// configure our routes
krishiphalApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })

    // route for the home page
    .when('/index', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })

    // route for the offices page
    .when('/offices', {
        templateUrl: 'Offices.html',
        controller: 'officesController'
    })

    // route for the career page
    .when('/careers', {
        templateUrl: 'career.html',
        controller: 'careerController'
    })

    // route for the advisory services page
    .when('/advisoryServices', {
        templateUrl: 'advisory-services.html',
        controller: 'advisoryServicesController'
    })

    // route for the crops we grow page
    .when('/cropsWeGrow', {
        templateUrl: 'crop-we-grow.html',
        controller: 'cropsWeGrowController'
    })

    // route for the client relation page
    .when('/clientRelation', {
        templateUrl: 'client-relation.html',
        controller: 'clientRelationController'
    })

    // route for the advisory services page
    .when('/certification', {
        templateUrl: 'certification.html',
        controller: 'certificationController'
    })

    // route for the faq page
    .when('/news', {
        templateUrl: 'news.html',
        controller: 'newsController'
    })

    // route for the contact page
    .when('/gallery', {
        templateUrl: 'Gallery.html',
        controller: 'galleryController'
    })

    // route for the faq page
    .when('/faq', {
        templateUrl: 'faq.html',
        controller: 'faqController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'contactController'
    });
});

// create the controller and inject Angular's $scope
krishiphalApp.controller('mainController', function($scope, $location) {
    document.title = "KrishiPhal";
    $("li.parentMenu").removeClass("activeMenu");
    $("#index").addClass("activeMenu");

    $('.carousel').carousel({
        interval: 3000,
        pause: "false"
    });

    $('.flexslider').flexslider({
        animation: "slide"
    });
});

krishiphalApp.controller('faqController', function($scope, $location) {
    document.title = "FAQ";
    $("li.parentMenu").removeClass("activeMenu");
    $("#faq").addClass("activeMenu");


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }

});

krishiphalApp.controller('advisoryServicesController', function($scope, $location) {
    document.title = "Advisory Services";
    $("li.parentMenu").removeClass("activeMenu");
    $("#whatWeDo").addClass("activeMenu");
});

krishiphalApp.controller('cropsWeGrowController', function($scope, $location) {
    document.title = "Crops we grow";
    $("li.parentMenu").removeClass("activeMenu");
    $("#whatWeDo").addClass("activeMenu");
});

krishiphalApp.controller('clientRelationController', function($scope, $location) {
    document.title = "Client Relation";
    $("li.parentMenu").removeClass("activeMenu");
    $("#whatWeDo").addClass("activeMenu");
});

krishiphalApp.controller('certificationController', function($scope, $location) {
    document.title = "Certification";
    $("li.parentMenu").removeClass("activeMenu");
    $("#whatWeDo").addClass("activeMenu");
});

krishiphalApp.controller('careerController', function($scope, $location) {
    document.title = "Careers";
    $("li.parentMenu").removeClass("activeMenu");
    $("#careers").addClass("activeMenu");
});

krishiphalApp.controller('newsController', function($scope, $location) {
    document.title = "News";
    $("li.parentMenu").removeClass("activeMenu");
    $("#mediaUpdate").addClass("activeMenu");
});

krishiphalApp.controller('galleryController', function($scope, $location) {
    document.title = "Gallery";
    $("li.parentMenu").removeClass("activeMenu");
    $("#mediaUpdate").addClass("activeMenu");

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

krishiphalApp.controller('officesController', function($scope, $location) {
    document.title = "Our offices";
    $("li.parentMenu").removeClass("activeMenu");
    $("#contactUs").addClass("activeMenu");
});

krishiphalApp.controller('contactController', function($scope, $location) {
    document.title = "Contact Us";
    $("li.parentMenu").removeClass("activeMenu");
    $("#contactUs").addClass("activeMenu");
    // $scope.message = 'put a message to render on page';
});