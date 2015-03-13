angular.module('app', [])
    .controller('MainCtrl', function ($scope) {
        $scope.showName = function () {
            console.log($scope.name);
        };

        $scope.showNameParam = function (name) {
            console.log(name);
        };
    });