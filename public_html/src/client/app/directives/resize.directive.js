(function(){
    'use strict';

    angular.module('app')
    .directive('resize', function($window, Responsive){
        return {
            link: function(scope) {
                angular.element($window).on('load resize', function(e) {
                    var w = $window,
                        x = w.innerWidth,
                        y = w.innerHeight;
                    checkWidth(x);
                });

                function checkWidth(x) {
                    if (x >= 568 && x < 768)
                        Responsive.setResp('sm');
                    else if (x >= 768 && x < 1024)
                        Responsive.setResp('md');
                    else if (x >= 1024)
                        Responsive.setResp('lg');
                    else
                        Responsive.setResp(null);
                    return Responsive.getResp();
                }
            }
        }
    })
})();