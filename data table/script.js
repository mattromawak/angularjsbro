var app = angular.module('todoApp', []);


app.controller('userController', ['$scope', '$http', function ($scope, $http) {

    $http.get('mockdata/data.json').then(function (response) {
        $scope.users = response.data;

        $(document).ready(function () {
            $('#userTable').DataTable();
        });
    });

}]);