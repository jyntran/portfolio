(function() {
    'use strict';

    angular
    .module('app')
    .controller('WorkCtrl', WorkCtrl);

    function WorkCtrl(ApiService, $scope) {
        var vm = this;

        vm.works = [];
        vm.filtering = 'all';

        vm.isActive = isActive;

        vm.lightbox = null;

        // vm.showLightbox = showLightbox;

        init();
        //////////

        function init() {
            $scope.$on('resize::resize', function() {
                //console.log('[WorkCtrl] width: '+innerWidth);
            });
            populateWorks();
        }

        function populateWorks() {
            ApiService.getWorks()
                .then(
                    function(resp) {
                        vm.works = resp.data;
                    },
                    function(error) {
                        console.log(error)
                    }
                )
        }

        function isActive(work) {
            if (vm.filtering == 'all')
                return true;

            var inArt = work.tags.indexOf('art') > -1;
            var inCode = work.tags.indexOf('code') > -1;
            if (vm.filtering == 'art')
                return inArt && !inCode;
            else if (vm.filtering == 'code')
                return inCode && !inArt;
            else if (vm.filtering == 'both')
                return inCode && inArt;
        }

        // function showLightbox(preview) {
        //     vm.show = true;
        //     vm.preview = preview;
        // }
    }
})();