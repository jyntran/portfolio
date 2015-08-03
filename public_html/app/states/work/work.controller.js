(function() {
    'use strict';

    angular
    .module('app')
    .controller('WorkCtrl', ['$http', function($http) {
        var vm = this;

        vm.works = [];
        vm.filters = [];
        vm.filtersDict = {};

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
            $http.get('/data/works_filters.json')
                .then(
                    function(resp) {
                        vm.filters = resp.data;
                        vm.filters.forEach(function(filter){
                            vm.filtersDict[filter.name] = filter.checked;
                        })
                    },
                    function(resp) {
                        console.log(error)
                    }
                )
        }

        function toggleFilter(filter) {
            vm.filtersDict[filter.name] = !vm.filtersDict[filter.name];
        }

        function isActive(work) {
            var result = false;
            work.tags.forEach(function(tag){
                if (vm.filtersDict[tag])
                    result = true;
            });            
            return result;
        }

        function showLightbox(preview) {
            vm.show = true;
            vm.preview = preview;
        }
    }])
})();