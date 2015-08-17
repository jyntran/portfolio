(function(){
    'use strict';

    angular.module('app')
    .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl(ContactService){
        var vm = this;

        // vm.input = {};
        vm.input = {name:'test name', email:'test@test.com', subject:'test subject', message: 'test message'};
        vm.send = send;

        init();
        /////

        function init() {
            console.log('[ContactCtrl] init')
        }

        function send() {
            console.log('[ContactCtrl] send')
            ContactService.sendForm(vm.input)
            .then(function(resp){
                console.log('[ContactCtrl] form sent')
            })
        }
    }
})();