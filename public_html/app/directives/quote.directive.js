(function(){
    'use strict';

    angular.module('app')
    .directive('quote', ['ApiService', function(ApiService){
        return {
            restrict: 'EA',
            template: '<h1 class="quote">&ldquo;{{qod.quote}}&rdquo;</h1><h2 class="author">&mdash; {{qod.author}}</h2>',
            link: function(scope, elem, attr) {
                ApiService.getQuote()
                .then(function(resp){
                    scope.qod = resp;
                })
            }
        }
    }])
})();