(function() { 
    'use strict';

    angular
        .module('app.routing')
        .config(ListRoutes);

        function ListRoutes($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/app/home/home.view.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: '/app/about/about.view.html'
                });
        }

    angular.module('app.routing').run(function ($state, $rootScope, $window){
    });

})();
