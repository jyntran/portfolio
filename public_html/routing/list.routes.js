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
            .state('about', {
                url: '/about',
                templateUrl: 'states/about/about.view.html'
            });
    }

})();
