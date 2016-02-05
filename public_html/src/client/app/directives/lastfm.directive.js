(function(){
    'use strict';

    angular.module('app')
    .directive('lastfm', ['ApiService', function(ApiService){
        return function(scope, elem, attr) {
            ApiService.getLastFM()
            .then(function(resp){
                scope.lastfm = resp.nowplaying;
            })
        }
    }])
})();
