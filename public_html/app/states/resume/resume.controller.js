(function(){
    'use strict';

    angular.module('app')
    .controller('ResumeCtrl', ResumeCtrl);

    function ResumeCtrl(ApiService){
        var vm = this;

        vm.technical,
        vm.history,
        vm.awards;

        init();
        /////

        function init() {
            populateResume();
        }

        function populateResume() {
            ApiService.getResume()
                .then(
                    function(resp) {
                        vm.technical = resp.data.technical;
                        vm.history = resp.data.history;
                        vm.awards = resp.data.awards;
                    },
                    function(error) {
                        console.log(error)
                    }
                )
        }
    }
})();