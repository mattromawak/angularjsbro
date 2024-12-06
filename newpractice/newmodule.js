var newModel = angular.module('newModel', ['ngRoute'])

newModel.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/index.html', {
            templateUrl: 'index.html',
            controller: 'newController' 
        });
}]);

newModel.controller('newController', ['$scope', function($scope){

    $scope.message = "fuck them"

}]);

