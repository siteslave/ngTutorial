angular.module('app', [])
    .controller('MainController', function ($scope) {
        $scope.products = [
            { name: 'Apple Watch', qty: 10},
            { name: 'iPad', qty: 5},
            { name: 'iPhone', qty: 15},
            { name: 'iOS', qty: 8},
            { name: 'MacBook', qty: 4},
            { name: 'MacBook Pro', qty: 2},
            { name: 'MacBook Air', qty: 15}
        ];
    });