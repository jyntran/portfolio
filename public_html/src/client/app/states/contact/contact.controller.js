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
            // console.log('[ContactCtrl] init')
        }

        function send() {
            ContactService.sendForm(vm.input)
            .then(function(resp){
                alert('Your form has been sent.');
            }, function(error){
                alert('Your form could not be sent. Please try again.');
            })
        }
    }
})();