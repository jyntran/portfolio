(function(){
    'use strict';

    angular.module('app')
    .directive('workBox', function(){
        return {
            restrict: 'EA',
            scope: {
                work: "=data",
                theme: "="
            },
            replace:true,
            templateUrl: '/app/directives/workBox.directive.template.html',
            link: function(scope, elem, attr) {
                scope.showInfo = false;
                scope.enableInfo = true;

                scope.toggleInfo = toggleInfo;

                init();
                /////
                function init() {
                    scope.$watch('resp', function(resp){
                        if (resp == null)
                            defaultResp();
                        else
                            smResp();
                        // scope.$apply();
                    })

                    if (!scope.work.preview)
                        scope.showInfo = true;
                }

                function toggleInfo() {
                    scope.showInfo = !scope.showInfo;
                    console.log(scope.showInfo)
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