
var keepNotes = angular.module('keepNotes', ['ngRoute'])

keepNotes.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'nameController'
        })
        .when('/directory',{
            templateUrl: 'views/directory.html',
            controller: 'nameController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

keepNotes.directive('randomPerson', [function(){

    return {
        restrict: 'E',
        scope: {
            names: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    };
}]);

keepNotes.controller('nameController', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/data.json').then(function(response){
        $scope.names = response.data;
    });

    $scope.removePerson = function (human) {
        var removePerson = $scope.names.indexOf(human);
        $scope.names.splice(removePerson, 1)
    };

    $scope.addPerson = function () {
        $scope.names.push({
            name: $scope.newPerson.name,
            age: parseInt($scope.newPerson.age),
            year: $scope.newPerson.year,
            section: $scope.newPerson.section || "none",
            present: true 
        });

        $scope.newPerson.name = "";
        $scope.newPerson.age = "";
        $scope.newPerson.year = "";
        $scope.newPerson.section = "";
    };

    $scope.bindName = "Type your name here";


    console.log(angular.toJson($scope.names));
}]);

