var app = angular.module('todoApp', []);

app.controller('userController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
    $http.get('mockdata/data.json').then(function (response) {
        $scope.users = response.data;

        $scope.initializeTable();
    });

    $scope.initializeTable = function () {
        setTimeout(function () {
            $('#userTable').DataTable({
                destroy: true,
                autoWidth: false,
                data: $scope.users,
                columns: [
                    { data: 'name', title: 'Name' },
                    { data: 'position', title: 'Position' },
                    { data: 'office', title: 'Office' },
                    { data: 'age', title: 'Age' },
                    {
                        data: 'startDate',
                        title: 'Start Date',
                        render: function (data) {
                            var formattedDate = new Date(data);
                            return formattedDate.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            });
                        }
                    },
                    {
                        data: 'salary',
                        title: 'Salary',
                        render: function (data) {
                            return $filter('currency')(data, '₱');
                        }
                    }
                ]
            });

        }, 0);
    };

    $scope.addPerson = function () {
        var newUser = {
            name: $scope.newPerson.name,
            position: $scope.newPerson.position,
            office: $scope.newPerson.office,
            age: parseInt($scope.newPerson.age),
            startDate: $scope.newPerson.startDate,
            salary: parseInt($scope.newPerson.salary)
        };

        $scope.users.push(newUser);

        $scope.newPerson = {};

        $('#userTable').DataTable().clear().rows.add($scope.users).draw();
    };
}]);
