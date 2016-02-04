(function(){
    'use strict';

    angular.module('app')
    .factory('ContactService', ContactService);

    function ContactService(){
        var service = {
            sendForm: sendForm
        }
        return service;

        /////

        function sendForm() {
            // todo
            return $http.post('')
            .then(function(resp){
                return resp;
            }, function(error){
                console.log('ERROR: sendForm()')
                console.log(error)
            });
        }
    }
})();