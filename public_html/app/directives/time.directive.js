(function(){
    'use strict';

    angular
    .module('app')
    .directive('time', ['$filter', function($filter){
        return {
            restrict: 'EA',
            template: '{{time}}',
            link: function(scope, elem, attr) {
                var date = new Date();
                var time = $filter('date')(date, 'shortTime', '-0400');
                elem.text(time);
            }
        }
    }]);
})();