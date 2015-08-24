(function(){
    'use strict';

    angular.module('app')
    .controller('AboutCtrl', AboutCtrl);

    function AboutCtrl(ApiService){
        var vm = this;

        vm.bio;
        vm.photo;

        init();
        /////

        function init() {
            populateAbout();
            populateCurrent();
        }

        function populateAbout() {
            var about = ApiService.getAbout();
            vm.bio = about.bio;
            vm.photo = about.photo;
        }

        function populateCurrent() {
            ApiService.getCurrent()
                .then(
                    function(resp) {
                        console.log(resp)
                        vm.current = resp;
                    },
                    function(error) {
                        console.log(error)
                    }
                )
        }
    }
})();