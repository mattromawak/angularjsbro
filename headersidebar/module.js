var app = angular.module('headerSidebar', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'userController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'userController'
    })
    .when('/portfolio', {
        templateUrl: 'portfolio.html',
        controller: 'userController'
    })
    .when('/services', {
        templateUrl: 'services.html',
        controller: 'userController'
    })
    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'userController'
    })
    .when('/settings', {
        templateUrl: 'settings.html',
        controller: 'userController'
    })
    .otherwise({
        redirectTo: '/home'
    });
    
    document.getElementById('sidebarToggle').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('main-content').classList.toggle('active');
    });
});

app.controller('userController', function ($scope) {
    // Controller logic (if needed for dynamic content)
    $scope.message = "Welcome to the page!";
});

