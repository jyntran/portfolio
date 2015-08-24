(function(){
    'use strict';

    angular.module('app')
    .factory('ApiService', ApiService);

    function ApiService($http){
        var service = {
            data: {},
            getMaster: getMaster,
            getQuote: getQuote,
            getWeather: getWeather,
            getWorks: getWorks,
            getResume: getResume,
            getAbout: getAbout,
            getCurrent: getCurrent
        }
        return service;

        /////

        function getMaster() {
            $http.get('/get/master', {cache:true})
            .then(function(resp){
                service.data = resp.data;
            }, function(error){
                console.log('ERROR: getMaster()')
                console.log(error)
            });            
        }

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

        function getCurrent() {
            return $http.get('/get/current')
            .then(function(resp){
                return resp.data;
            }, function(error){
                console.log('ERROR: getCurrent()')
                console.log(error)
            });            
        }

        function getWorks() {
            return service.data.works;
        }

        function getResume() {
            return service.data.resume;
        }

        function getAbout() {
            return service.data.about;
        }
    }
})();