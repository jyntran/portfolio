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
            var resume = ApiService.getResume();
            vm.technical = resume.technical;
            vm.history = resume.history;
            vm.awards = resume.awards;
        }
    }
})();