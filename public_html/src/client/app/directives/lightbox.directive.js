(function(){
    'use strict';

    angular.module('app')
    .directive('lightbox', function(){
        return {
            scope: {
                preview: "=current"
            },
            replace: true,
            templateUrl: '/app/directives/lightbox.directive.template.html',
            link: function(scope, elem, attr) {
                scope.close = close;

                init();
                /////
                function init() {}

                function close() {
                    scope.preview = null;
                }
            }
        }
    })
})();