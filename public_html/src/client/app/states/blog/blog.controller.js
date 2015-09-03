(function(){
	'use strict';

	angular
		.module('app')
		.controller('BlogCtrl', BlogCtrl);

	function BlogCtrl($timeout, $window){
		var vm = this;

		init();
		/////

		function init(){
			console.log('[BlogCtrl]')
			$timeout(redirect, 1000);
		}

		function redirect(){
			$window.location.href = 'http://blog.jyntran.ca';
		}
	}
})();