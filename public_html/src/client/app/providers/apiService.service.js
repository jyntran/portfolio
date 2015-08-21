(function(){
    'use strict';

    angular.module('app')
    .factory('ApiService', ApiService);

    function ApiService($http){
        var service = {
            getQuote: getQuote,
            getWeather: getWeather,
            getWorks: getWorks,
            getResume: getResume,
            getAbout: getAbout
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

        function getWorks() {
            return $http.get('/get/works', {cache:true})
            .then(function(resp){
                return resp.data;
            }, function(error){
                console.log('ERROR: getWorks()')
                console.log(error)
            });
        }

        function getResume() {
            return $http.get('/get/resume', {cache:true})
            .then(function(resp){
                return resp.data;
            }, function(error){
                console.log('ERROR: getResume()')
                console.log(error)
            });
        }

        function getAbout() {
            return $http.get('/get/about', {cache:true})
            .then(function(resp){
                return resp.data;
            }, function(error){
                console.log('ERROR: getAbout()')
                console.log(error)
            });
        }
    }
})();