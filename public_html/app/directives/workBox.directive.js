(function(){
    angular.module('app')
    .directive('workBox', ['$window', function($window){
        return {
            restrict: 'EA',
            scope: {
                work: "=data",
                current: "=" 
                // showPreview: "=show",
                // preview: "="
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
    }])
})();