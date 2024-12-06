var todoList = angular.module('todoList', [])

//listController - display message
todoList.controller('listController', ['$scope', function ($scope) {

    $scope.message = "putanginang buhay to!";

}]);

//
todoList.controller('objectController', ['$scope', function ($scope) {

    $scope.names = [
        {
            name: 'matt',
            age: 21
        },
        {
            name: 'angel',
            age: 23
        },
        {
            name: 'kyla',
            age: 20
        }
    ]


}]);

todoList.controller('newTextController', ['$scope', function ($scope){

    $scope.newText = "pota"

}]);

todoList.controller('testController', ['$scope', function($scope){

    $scope.message = "pota ka daw"
}]);

//Object of players
todoList.controller('bagongController', ['$scope', function ($scope){

    $scope.players = [
        {
            name: 'Matt',
            year: '4th year',
            section: 'AI42',
            role: 'Slayer',
            age: 21,
        },
        {
            name: 'Chantal',
            year: '4th year',
            section: 'AI42',
            role: 'Slayer',
            age: 21,
        },
        {
            name: 'Ave',
            year: '3rd year',
            section: 'AI31',
            role: 'Objective',
            age: 19,
        },
        {
            name: 'Lois',
            year: '2nd year',
            section: 'AI21',
            role: 'Anchor',
            age: 19,
        },
    ]
}]);