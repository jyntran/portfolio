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
            .state('work', {
                url: '/',
                templateUrl: 'states/work/work.view.html'
            })
            .state('resume', {
                url: '/',
                templateUrl: 'states/resume/resume.view.html'
            })
            .state('about', {
                url: '/',
                templateUrl: 'states/about/about.view.html'
            });
    }

})();
