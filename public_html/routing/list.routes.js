(function() { 
    'use strict';

    angular
        .module('app.routing')
        .config(ListRoutes)
        .run();

    function ListRoutes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.view.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.view.html'
            });
    }

})();
