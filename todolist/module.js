var app = angular.module('todoApp', [])

app.controller('TodoController', function ($scope) {
    $scope.todos = [];
    $scope.isDarkMode = false;

    $scope.addTodo = function () {
        if ($scope.newTodo) {
            $scope.todos.push({
                title: $scope.newTodoTitle, // Add title here
                text: $scope.newTodo,
                editing: false,
                timestamp: new Date()
            });
            $scope.newTodoTitle = ''; // Reset title input
            $scope.newTodo = ''; // Reset task input
        }
    };

    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };

    $scope.editTodo = function (todo) {
        todo.editing = true;
    };

    $scope.saveEdit = function (todo) {
        todo.editing = false;
    };

    $scope.toggleDarkMode = function () {
        $scope.isDarkMode = !$scope.isDarkMode;
    };

    $scope.showTitleInput = false;

    $scope.toggleTitleInput = function () {
        $scope.showTitleInput = !$scope.showTitleInput;
    };
});

