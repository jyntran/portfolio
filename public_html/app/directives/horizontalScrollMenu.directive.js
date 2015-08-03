(function() {
    'use strict';

    angular.module('app')
    .directive('horizontalScrollMenu', function(){
        return {
            restrict: 'E',
            templateUrl: '/app/directives/horizontalScrollMenu.directive.template.html',
            scope: {
                active: '='
            },
            controller: function() {
                var vm = this;
                vm.toggle = toggle;
                /////
                function toggle(){
                    vm.active = !vm.active;
                }
            },
            controllerAs: 'ctrl',
            bindToController: true
        }
    })
})();