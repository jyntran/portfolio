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
                /////
                function toggleInfo() {
                    scope.showInfo = !scope.showInfo;
                }
            }
        }
    })
})();