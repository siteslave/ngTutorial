angular.module('app', [])
    .directive('hello', function () {
        return {
            restrict: 'E', // E = element, A = attribute, C = class
            template: '<div>Hello , {{ name }}</div>',
            scope: {
                name: '@'
            }
        };
    });