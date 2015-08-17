(function(){
    'use strict';

    angular.module('app')
    .factory('TimeService', TimeService);

    function TimeService($filter){
        var service = {
            getTimeOfDay: getTimeOfDay
        }
        return service;

        /////

        function getTimeOfDay() {
            var date = new Date();
            var hour = $filter('date')(date, 'H', '-0400');

            if (hour <= 5 || hour >= 22)
                time = 'night';
            else if (hour >= 6 && hour <= 9)
                time = 'sunrise';
            else if (hour >= 18 && hour <= 21)
                time = 'sunset';
            else
                time = 'day';

            return time;
        }
    }
})();