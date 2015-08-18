(function(){
    'use strict';

    angular.module('app')
    .factory('ApiService', ApiService);

    function ApiService($http){
        var service = {
            getQuote: getQuote,
            getWeather: getWeather
        }
        return service;

        /////

        function getQuote() {
            return $http.get('/get/quote')
            .then(function(resp){
                return resp.data.contents.quotes[0];
            }, function(error){
                console.log('ERROR: getQuote()')
                console.log(error)
            });
        }

        function getWeather() {
            return $http.get('/get/weather')
            .then(function(resp){
                return resp.data;
            }, function(error){
                console.log('ERROR: getWeather()')
                console.log(error)
            });
        }
    }
})();