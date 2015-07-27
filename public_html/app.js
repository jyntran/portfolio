// (function() { 
//     'use strict';

//     angular
//         .module('app', ['ui.router'])
//         .config(ListRoutes);

//         function ListRoutes($stateProvider, $urlRouterProvider) {

//             $urlRouterProvider.otherwise('/');

//             $stateProvider
//                 .state('home', {
//                     url: '/',
//                     templateUrl: '/app/home/home.view.html'
//                 })
//                 .state('about', {
//                     url: '/about',
//                     templateUrl: '/app/about/about.view.html'
//                 });
//         }

//     angular.module('app').run(function ($state, $rootScope, $window){
//     });

// })();