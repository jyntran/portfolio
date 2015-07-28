(function() { 
    'use strict';

    angular
        .module('app.routing')
        .config(routes)
        .run();

    function routes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'states/home/home.view.html'
            })
            .state('code', {
                url: '/',
                templateUrl: 'states/code/code.view.html'
            })
            .state('art', {
                url: '/',
                templateUrl: 'states/art/art.view.html'
            })
            .state('about', {
                url: '/',
                templateUrl: 'states/about/about.view.html'
            });
    }

})();
