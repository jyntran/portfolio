(function() {
    'use strict';

    angular
    .module('app')
    .controller('WorkCtrl', ['$http', function($http) {
        var vm = this;

        vm.works = [];

        vm.filtersObj = {
            art: true,
            code: true
        }
        vm.filters = [ 'art', 'code' ];

        vm.toggleFilter = toggleFilter;
        vm.isActive = isActive;
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

        function toggleFilter(filter) {
            vm.filtersObj[filter] = !vm.filtersObj[filter];
        }

        function isActive(work) {
            var result = true;
            work.tags.forEach(function(tag){
                if (!vm.filtersObj[tag])
                    result = false;
            });            
            return result;
        }

        function showLightbox(preview) {
            vm.show = true;
            vm.preview = preview;
        }
    }])
})();