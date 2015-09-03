(function(){
    'use strict';

    angular.module('app')
    .factory('Responsive', Responsive);

    function Responsive(){
        var service = {
        	resp: null,
        	getResp: getResp,
        	setResp: setResp
        }
        return service;

        /////

        function getResp() {
        	return service.resp;
        }

        function setResp(newResp) {
        	service.resp = newResp;
        	return service.resp;
        }
    }
})();