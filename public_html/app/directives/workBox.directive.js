(function(){
    'use strict';

    angular.module('app')
    .directive('workBox', function(){
        return {
            restrict: 'EA',
            scope: {
                work: "=data"
            },
            templateUrl: '/app/directives/workBox.directive.template.html',
            link: function(scope, elem, attr) {
                scope.showInfo = false;
                scope.enableInfo = true;

                scope.toggleInfo = toggleInfo;

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
                }

                function toggleInfo() {
                    scope.showInfo = !scope.showInfo;
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