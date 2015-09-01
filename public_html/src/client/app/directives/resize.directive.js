(function(){
    'use strict';

    angular.module('app')
    .directive('resize', function($window){
        return {
            link: function(scope) {
                scope.resp = null;
                
                angular.element($window).on('resize', function(e) {
                    var w = $window,
                        x = w.innerWidth,
                        y = w.innerHeight;
                    checkWidth(x);
                });

                function checkWidth(x) {
                    if (x >= 568 && x < 768)
                        scope.resp = 'sm';
                    else if (x >= 768 && x < 1024)
                        scope.resp = 'md';
                    else
                        scope.resp = 'lg';
                    return scope.resp;
                }
            }
        }
    })
})();