'use strict';

angular.module('adsviewerApp').config(function ($routeProvider) {
	$routeProvider.when('/products', {
		template: '<products></products>',
		authenticate: true
	});
});
//# sourceMappingURL=products.js.map
