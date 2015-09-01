(function(){
    'use strict';

    angular
    .module('app')
    .directive('weatherBg', function(){
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
                scope.$watch('weather', function(weather){
                    if (weather) {
                        var main = weather.weather[0].main.toLowerCase();
                        var file = '';
                        if (~main.indexOf('rain')
                            || (~main.indexOf('drizzle'))){
                            file = 'rain';
                        } else if (~main.indexOf('thunderstorm')){
                            file = 'thunderstorm';
                        } else if (~main.indexOf('snow')
                            || ~main.indexOf('hail')
                            || ~main.indexOf('sleet')){
                            file = 'snow';
                        } else if (~main.indexOf('overcast')
                            || ~main.indexOf('storm')) {
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
                        scope.weatherBg = '/app/style/img/weather_'+file+'.jpg';
                    }
                })
            }
        }
    });
})();