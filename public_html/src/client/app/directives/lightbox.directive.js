(function(){
    'use strict';

    angular.module('app')
    .directive('lightbox', function(){
        return {
            restrict: 'E',
            scope: {
                content: "=",
            },
            templateUrl: '/app/directives/lightbox.directive.template.html',
            controller: function() {
                var vm = this;
                vm.close = close;
                /////
                function close() {
                    vm.content = null;
                }
            },
            controllerAs: 'ctrl',
            bindToController: true
        }
    })
})();