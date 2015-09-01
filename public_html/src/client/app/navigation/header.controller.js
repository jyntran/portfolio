(function(){
    'use strict';

    angular.module('app')
    .controller('HeaderCtrl', HeaderCtrl);

    function HeaderCtrl($scope){
        var vm = this;

        vm.toggleMenu = toggleMenu;
        vm.showMenu = false;

        init();
        /////

        function init() {
            window.onclick = function() {
                if (vm.showMenu) {
                    vm.showMenu = false;
                    $scope.$apply();
                }
            };
        }

        function toggleMenu(event) {
            vm.showMenu = !vm.showMenu;
            event.stopPropagation();
            event.preventDefault();
        };
    }
})();
