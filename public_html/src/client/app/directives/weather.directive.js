(function(){
    'use strict';

    angular.module('app')
    .directive('weather', ['ApiService', function(ApiService){
        return function(scope, elem, attr) {
            ApiService.getWeather()
            .then(function(resp){
                scope.weather = resp;
            })
        }
    }])
})();
