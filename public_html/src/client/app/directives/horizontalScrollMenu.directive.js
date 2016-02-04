(function() {
    'use strict';

    angular.module('app')
    .directive('horizontalScrollMenu', function(){
        return {
            restrict: 'E',
            templateUrl: '/app/directives/horizontalScrollMenu.directive.template.html',
            scope: {
                active: '=',
                theme: '='
            },
            link: function(scope, elem, attr) {
                scope.toggle = toggle;
                /////
                function toggle(){
                    scope.active = !scope.active;
                }
            }
        }
    })
})();