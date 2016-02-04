(function(){
    'use strict';

    angular.module('app')
    .controller('AboutCtrl', AboutCtrl);

    function AboutCtrl(ApiService){
        var vm = this;

        init();
        /////

        function init() {
            populateAbout();
        }

        function populateAbout() {
            vm.about = (function() {
                return ApiService.getAbout();
            })();
        }
    }
})();