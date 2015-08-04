(function() {
    'use strict';

    angular
    .module('app')
    .controller('WorkCtrl', ['$http', function($http) {
        var vm = this;

        vm.works = [];
        vm.filtering = 'both';

        vm.isActive = isActive;
        vm.showInfo = showInfo;
        vm.showLightbox = showLightbox;

        init();
        //////////

        function init() {
            populateWorks();
        }

        function populateWorks() {
            $http.get('/data/works.json')
                .then(
                    function(resp) {
                        vm.works = resp.data;
                    },
                    function(resp) {
                        console.log(error)
                    }
                )
        }

        function isActive(work) {
            if (vm.filtering == 'both')
                return true;

            var inArt = work.tags.indexOf('art') > -1;
            var inCode = work.tags.indexOf('code') > -1;
            if (vm.filtering == 'art')
                return inArt && !inCode;
            if (vm.filtering == 'code')
                return inCode && !inArt;
        }

        function showInfo() {
            vm.showInfo = true;
        }

        function showLightbox(preview) {
            vm.show = true;
            vm.preview = preview;
        }
    }])
})();