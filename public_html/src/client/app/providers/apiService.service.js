(function(){
    'use strict';

    angular.module('app')
    .factory('ApiService', ApiService);

    function ApiService($http){
        var service = {
            data: {},
            getMaster: getMaster,
            getLastFM: getLastFM,
            getWorks: getWorks,
            getResume: getResume,
            getAbout: getAbout
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

        function getLastFM() {
            return $http.get('/get/lastfm')
            .then(function(resp){
                return resp.data.recenttracks.track[0];
            }, function(error){
                console.log('ERROR: getLastFM()')
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