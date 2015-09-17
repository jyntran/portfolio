(function(){
    'use strict';

    angular.module('app')
    .directive('workBox', function(Responsive){
        return {
            restrict: 'EA',
            scope: {
                work: "=data",
                theme: "=",
                current: "=",
                isPortrait: "="
            },
            replace:true,
            templateUrl: '/app/directives/workBox.directive.template.html',
            link: function(scope, elem, attr) {
                scope.showInfo = false;

                scope.toggleInfo = toggleInfo;

                scope.setLightbox = setLightbox;

                init();
                /////
                function init() {
                    // scope.$watch('resp', function(resp){
                    scope.$watch( function() { return Responsive.getResp() }, function(resp){
                        if (resp == null)
                            defaultResp();
                        else
                            smResp();
                    })

                    if (!scope.work.preview)
                        scope.showInfo = true;
                }

                function toggleInfo() {
                    if (scope.enableInfo)
                        scope.showInfo = !scope.showInfo;
                }

                function setLightbox(url, isPortrait) {
                    console.log('setLightbox')
                    scope.current = {
                        url: url,
                        isPortrait: isPortrait
                    };
                    console.log(scope.current);
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