(function(){
    'use strict';

    angular
    .module('app')
    .directive('themeSensitive', function(){
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
                scope.$watch('theme', function(theme) {
                    elem.addClass(theme)
                })
            }
        }
    });
})();