(function(){
    'use strict';

    angular.module('app')
    .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl(ContactService){
        var vm = this;

        vm.input = {};
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
                alert('Your form has been sent.');
            }, function(error){
                console.log('[ContactCtrl] form not sent')
                alert('Your form could not be sent. Please try again.');
            })
        }
    }
})();