(function(){
    'use strict';

    angular.module('app')
    .controller('AboutCtrl', AboutCtrl);

    function AboutCtrl(ApiService){
        var vm = this;

        vm.bio;

        init();
        /////

        function init() {
            populateAbout();
        }

        function populateAbout() {
            var about = ApiService.getAbout();
            vm.bio = about.bio;
            vm.photo = about.photo;
            vm.current = about.current;
        }
    }
})();