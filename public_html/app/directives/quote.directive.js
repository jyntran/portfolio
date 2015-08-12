(function(){
    'use strict';

    angular.module('app')
    .directive('quote', ['$http', function($http){
        return {
            restrict: 'EA',
            scope: { src: '@' },
            template: '<h1 class="quote">&ldquo;{{qod.quote}}&rdquo;</h1><h2 class="author">&mdash; {{qod.author}}</h2>',
            controller: function($scope) {
                $http.get($scope.src)
                .then(function(resp){
                    $scope.qod = resp.data.contents.quotes[0];
                }, function(error){
                    console.log('ERROR:')
                    console.log(error)
                })
            }
        }
    }])
})();