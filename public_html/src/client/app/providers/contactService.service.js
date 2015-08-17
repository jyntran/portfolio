(function(){
    'use strict';

    angular.module('app')
    .factory('ContactService', ContactService);

    function ContactService($http){
        var service = {
            sendForm: sendForm
        }
        return service;

        /////

        function sendForm(form) {
            // todo
            return $http.post('/contact', {form: form})
            .then(function(resp){
                console.log('SUCCESS: sendForm()')
                console.log(resp)
                return resp;
            }, function(error){
                console.log('ERROR: sendForm()')
                console.log(error)
            });
        }
    }
})();