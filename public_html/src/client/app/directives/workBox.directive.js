(function(){
    'use strict';

    angular.module('app')
    .directive('workBox', function(){
        return {
            restrict: 'EA',
            scope: {
                work: "=data",
                theme: "=",
                lightbox: "="
            },
            replace: true,
            templateUrl: '/app/directives/workBox.directive.template.html',
            link: function(scope, elem, attr) {
                scope.showInfo = false;
                scope.enableInfo = true;
                scope.toggleInfo = toggleInfo;

                scope.toggleLightbox = toggleLightbox;

                init();
                /////
                function init() {
                    scope.$on('resize::resize', function(){
                        if (innerWidth >= 568)
                            smResp();
                        else
                            defaultResp();
                        scope.$apply();
                    })

                    if (!scope.work.preview)
                        scope.showInfo = true;

                    console.log(scope.lightbox)

                }

                function toggleInfo() {
                    scope.showInfo = !scope.showInfo;
                }

                function toggleLightbox() {
                    if (scope.lightbox == null) {
                        console.log('turning on')

                        scope.lightbox = scope.work.preview.full;
                    } else {
                        console.log('turning off')

                        scope.lightbox = null;
                    }
                    console.log(scope.lightbox)
                }

                // responsive
                function smResp() {
                    scope.enableInfo = false;
                }
                function defaultResp() {
                    scope.enableInfo = true;
                }
            }
        }
    })
})();