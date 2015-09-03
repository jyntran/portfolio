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
                url: '/works',
                templateUrl: '/src/client/app/states/work/work.view.html'
            })
            .state('resume', {
                url: '/resume',
                templateUrl: '/src/client/app/states/resume/resume.view.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/src/client/app/states/about/about.view.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/src/client/app/states/contact/contact.view.html'
            })
            .state('blog', {
                url: '/',
                templateUrl: '/src/client/app/states/blog/blog.view.html'
            });
    }

    function getMaster(ApiService) {
        ApiService.getMaster();
    }

})();