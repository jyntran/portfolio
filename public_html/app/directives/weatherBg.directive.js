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
                    var w = '';
                    if (~scope.weather.indexOf('rain')
                        || (~scope.weather.indexOf('drizzle'))){
                        w = 'rain';
                    } else if (~scope.weather.indexOf('thunderstorm')){
                        w = 'thunderstorm';
                    } else if (~scope.weather.indexOf('snow')
                        || ~scope.weather.indexOf('hail')
                        || ~scope.weather.indexOf('sleet')){
                        w = 'snow';
                    } else if (~scope.weather.indexOf('clouds')
                        || ~scope.weather.indexOf('storm')) {
                        w = 'clouds';
                    } else {
                        w = 'clear';
                    }
                    elem.css('background-image', 'url(/app/style/img/weather_'+w+'.jpg)');
                })
            }
        }
    }]);
})();