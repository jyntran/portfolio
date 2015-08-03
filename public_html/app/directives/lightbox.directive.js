(function(){
    'use strict';

    angular.module('app')
    .directive('lightbox', function(){
        return {
            restrict: 'EA',
            scope: {
                content: "=lightboxOpen",
                show: "=lightboxShow"
            },
            templateUrl: '/app/directives/lightbox.directive.template.html',
            controller: function() {
                var vm = this;
                vm.open = open;
                vm.close = close;
                /////
                function open() {
                    vm.show = true;
                }
                function close() {
                    vm.show = false;
                }
            },
            controllerAs: 'ctrl',
            bindToController: true
        }
    })
})();