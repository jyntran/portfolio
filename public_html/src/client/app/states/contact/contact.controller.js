(function(){
    'use strict';

    angular.module('app')
    .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl(ContactService){
        var vm = this;

        vm.input = {};
        vm.pending = null;
        vm.send = send;

        init();
        /////

        function init() {
            // console.log('[ContactCtrl] init')
        }

        function send() {
            vm.pending = 'Pending...';
            ContactService.sendForm(vm.input)
            .then(function(resp){
                vm.pending = null;
                alert('Your form has been sent.');
            }, function(error){
                vm.pending = null;
                alert('Your form could not be sent. Please try again.');
            })
        }
    }
})();