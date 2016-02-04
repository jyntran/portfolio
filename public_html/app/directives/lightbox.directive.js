(function(){
    'use strict';

    angular.module('app')
    .directive('lightbox', function(){
        return {
            restrict: 'EA',
            scope: {
                content: "=lightboxOpen",
            },
            templateUrl: '/app/directives/lightbox.directive.template.html',
            controller: function() {
                var vm = this;
                vm.close = close;
                /////
                function close() {
                    vm.show = false;
                }
            },
            controllerAs: 'ctrl',
            bindToController: true
        }
    })
})();