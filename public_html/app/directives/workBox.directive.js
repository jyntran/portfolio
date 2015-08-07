(function(){
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
                scope.toggleInfo = toggleInfo;
                scope.enableInfo = true;
                /////
                function toggleInfo() {
                    scope.showInfo = !scope.showInfo;
                }

                function enableInfo(val) {
                    scope.enableInfo = val;
                }

                scope.$on('resize::resize', function(){
                    if(innerWidth >= 568){
                        enableInfo(false);
                    } else {
                        enableInfo(true);
                    }
                    scope.$apply();
                })
            }
        }
    })
})();