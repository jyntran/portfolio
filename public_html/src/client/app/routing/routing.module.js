(function() {
    'use strict';
    
    angular.module('app.routing', ['ui.router'])
        .config(routes)
        .run(getMaster);

    function routes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/src/client/app/states/home/home.view.html'
            })
            .state('work', {
                url: '/',
                templateUrl: '/src/client/app/states/work/work.view.html'
            })
            .state('resume', {
                url: '/',
                templateUrl: '/src/client/app/states/resume/resume.view.html'
            })
            .state('about', {
                url: '/',
                templateUrl: '/src/client/app/states/about/about.view.html'
            })
            .state('contact', {
                url: '/',
                templateUrl: '/src/client/app/states/contact/contact.view.html'
            });
    }

    function getMaster(ApiService) {
        ApiService.getMaster();
    }

})();