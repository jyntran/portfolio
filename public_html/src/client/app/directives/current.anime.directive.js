(function(){
    'use strict';

    angular.module('app')
    .directive('currentAnime', function(){
        return {
            restrict: 'E',
            scope: {
                anime: "="
            },
            replace: true,
            templateUrl: '/app/directives/current.anime.directive.template.html'
        }
    })
})();