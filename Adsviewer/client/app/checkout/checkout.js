'use strict';

angular.module('adsviewerApp')
	.config(function ($routeProvider) {
		 $routeProvider
	    .when('/checkout', {
	      template: '<checkout></checkout>'
	    });
});
 