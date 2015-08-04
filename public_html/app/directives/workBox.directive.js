(function(){
    angular.module('app')
    .directive('workBox', function(){
        return {
            restrict: 'EA',
            scope: {
                work: "=data"
            },
            // controller: function(){
            //     var vm = this;
            //     vm.toggleInfo = toggleInfo;
            //     /////
            //     function init(){
            //         console.log('init')
            //         console.log(vm.work)
            //     }
            //     function toggleInfo() {
            //         console.log('toggleInfo')
            //         vm.showInfo = !vm.showInfo;
            //         console.log(vm.showInfo)
            //     }
            // },
            // controllerAs: 'ctrl',
            // bindAsController: true,
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