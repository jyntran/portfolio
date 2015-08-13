(function(){
    'use strict';

    angular
    .module('app')
    .directive('timeBg', ['$filter', function($filter){
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
                var img = '';

                var date = new Date();
                var hour = $filter('date')(date, 'H', '-0400');

                if (hour <= 5 || hour >= 22) {
                    img = 'night';
                    scope.theme = 'night'; }
                else if (hour >= 6 && hour <= 9) {
                    img = 'sunrise';
                    scope.theme = 'day'; }
                else if (hour >= 18 && hour <= 21) {
                    img = 'sunset';
                    scope.theme = 'night'; }
                else {
                    img = 'day';
                    scope.theme = 'day'; }

                elem.css('background-image', 'url(/app/style/img/sky_'+img+')');
            }
        }
    }]);
})();