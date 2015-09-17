(function(){
    'use strict';

    angular.module('app')
    .directive('lightbox', function($document){
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
                function init() {
                    $document.bind('keydown', function(e) {
                        if (e.which == 27 || e.which == 88) { // ESC or X
                            close();
                            scope.$apply();
                        }
                    });
                }

                function close() {
                    scope.preview = null;
                }
            }
        }
    })
})();