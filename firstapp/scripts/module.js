var taskManager = angular.module('taskManager', [])

taskManager.controller('TaskController', ['$scope', function($scope){ 

    $scope.message = "fuck u";

    $scope.tasks = ['homework', 'project'];
}]);

taskManager.controller('ListNameController', ['$scope', function($scope){

    $scope.humans = [
        {
            name: "matt",
            age: 19,
            rate: 50
        },

        {
            name: "angel",
            age: 20,
            rate: 30
        }
    ];
}]);

taskManager.config(function(){

});

taskManager.run(function(){
    
});

