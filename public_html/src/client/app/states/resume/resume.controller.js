(function(){
    'use strict';

    angular.module('app')
    .controller('ResumeCtrl', ResumeCtrl);

    function ResumeCtrl(ApiService){
        var vm = this;

        vm.skills,
        vm.history,
        vm.awards;

        init();
        /////

        function init() {
            populateResume();
        }

        function populateResume() {
            var resume = ApiService.getResume();
            vm.skills = resume.skills;
            vm.history = resume.history;
            vm.other = resume.other;
            vm.awards = resume.awards;
            vm.download = resume.download;
        }
    }
})();