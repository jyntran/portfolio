(function(){
    'use strict';

    angular.module('app')
    .directive('resize', function($window){
        return {
            link: function(scope) {
                angular.element($window).on('resize', function(e) {
                    // Namespacing events with name of directive + event to avoid collisions
                    var w = $window,
                        x = w.innerWidth,
                        y = w.innerHeight;
                    scope.$broadcast('resize::resize', {
                        innerWidth: x,
                        innerHeight: y
                    });
              });
            }
        }
    })
})();