(function(){
    'use strict';

    angular.module('app')
    .directive('quote', ['$http', function($http){
        return {
            restrict: 'EA',
            scope: { src: '@' },
            template: '<p class="quote">{{qod.quote}}</p><p class="author">{{qod.author}}</p>',
            controller: function($scope) {
                var qod;
                $http.get($scope.src)
                .then(function(resp){
                    qod = resp.contents.quotes[0];
                }, function(error){
                    console.log('ERROR:')
                    console.log(error)
                })
            }
        }
    }])
})();

/*
{"success":{"total":1},"contents":{"quotes":[{"quote":"A piece of art is never a finished work. It answers a question which has been asked, and asks a new question.","length":"109","author":"Robert Engman","tags":["art","question"],"category":"art","id":"E0hrdGC7eoxoyq0mmtPJGQeF"}]}}
*/