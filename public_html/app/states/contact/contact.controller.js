(function(){
    'use strict';

    angular.module('app')
    .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl(){
        var vm = this;

        vm.input = {};
        vm.send = send;

        init();
        /////

        function init() {
            // console.log('[ContactCtrl] init')
        }

        function send() {
            // console.log('[ContactCtrl] send')
            // ContactService.sendForm()
            // .then(function(resp){
            //     console.log('[ContactCtrl] form sent')
            // })
        }
    }
})();