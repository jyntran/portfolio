(function(){
    'use strict';

    angular.module('app')
    .factory('ApiService', ApiService);

    function ApiService(){
        var service = {
            getQuote: getQuote,
            getWeather: getWeather
        }
        return service;

        /////

        // TODO: backend

        function getQuote() {
            // var src = '/data/api_quote.json';
            var src = 'http://api.theysaidso.com/qod.json?category=inspire';
            $http.get(src)
            .then(function(resp){
                return qod = resp.data.contents.quotes[0];
            }, function(error){
                console.log('ERROR: getQuote()')
                console.log(error)
            })
        }

        function getWeather() {
            // var src = '/data/api_weather.json';
            $http.get(src)
            .then(function(resp){
                return weather = resp;
            }, function(error){
                console.log('ERROR: getWeather')
                console.log(error)
            })
        }
    }
})