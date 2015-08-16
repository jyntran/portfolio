(function(){
    'use strict';

    angular.module('app')
    .directive('quote', ['ApiService', function(ApiService){
        return {
            restrict: 'EA',
            template: '<p class="quote">&ldquo;{{qod.quote}}&rdquo;</p><p class="author">&mdash; {{qod.author}}</p>',
            link: function(scope, elem, attr) {
                elem.css('display', 'none');
                ApiService.getQuote()
                .then(function(resp){
                    scope.qod = resp;
                    elem.css('display', 'block');
                })
            }
        }
    }])
})();