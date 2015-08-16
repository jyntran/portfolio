(function(){
    'use strict';

    angular.module('app')
    .directive('themeChange', function(){
        return {
            scope: {
                theme: "="
            },
            link: function(scope, elem, attr) {
                function toggleTheme() {
                    if (scope.theme == 'day')
                        scope.theme = 'night';
                    else
                        scope.theme = 'day';
                    console.log(scope.theme)
                    scope.$apply();
                }
                elem.bind('click', toggleTheme);
            }
        }
    })
})();