(function(){
    'use strict';

    angular
    .module('app')
    .directive('time', ['$filter', function($filter){
        return {
            restrict: 'EA',
            link: function(scope, elem, attr) {
                scope.hour = $filter('date')(new Date(), 'H', '-0400');
                if (scope.hour <= 5 || scope.hour >= 22 || (scope.hour >= 18 && scope.hour <= 21))
                    scope.theme = 'night';
                else 
                    scope.theme = 'day';
            }
        }
    }]);
})();