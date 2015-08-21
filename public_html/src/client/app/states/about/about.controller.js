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
        }

        function populateAbout() {
            ApiService.getAbout()
                .then(
                    function(resp) {
                        vm.bio = resp.data.bio;
                        vm.photo = resp.data.photo;
                    },
                    function(error) {
                        console.log(error)
                    }
                )
        }
    }
})();