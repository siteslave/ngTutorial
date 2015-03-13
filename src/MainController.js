angular.module('app', [])
    .controller('MainController', function ($scope) {
        $scope.isShow = true;

        $scope.toggleMe = function () {
            $scope.isShow = !$scope.isShow ? true : false;
        };

    });