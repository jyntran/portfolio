(function(){
    'use strict';

    angular
    .module('app')
    .directive('weatherBg', ['ApiService', function(ApiService){
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
                ApiService.getWeather()
                .then(function(resp){
                    scope.weather = resp.weather[0].main.toLowerCase();
                    var file = '';
                    if (~scope.weather.indexOf('rain')
                        || (~scope.weather.indexOf('drizzle'))){
                        file = 'rain';
                    } else if (~scope.weather.indexOf('thunderstorm')){
                        file = 'thunderstorm';
                    } else if (~scope.weather.indexOf('snow')
                        || ~scope.weather.indexOf('hail')
                        || ~scope.weather.indexOf('sleet')){
                        file = 'snow';
                    } else if (~scope.weather.indexOf('clouds')
                        || ~scope.weather.indexOf('storm')) {
                        file = 'clouds';
                    } else {
                        if (scope.hour <= 5 || scope.hour >= 22)
                            file = 'night';
                        else if (scope.hour >= 6 && scope.hour <= 9) 
                            file = 'sunrise'
                        else if (scope.hour >= 18 && scope.hour <= 21) 
                            file = 'sunset'
                        else
                            file = 'clear';
                    }
                    elem.css('background-image', 'url(/app/style/img/weather_'+file+'.jpg)');
                })
            }
        }
    }]);
})();