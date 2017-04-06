'use strict';

angular.module('adsviewerApp', ['adsviewerApp.auth', 'adsviewerApp.admin', 'adsviewerApp.constants', 'ngCookies', 'ngResource', 'ngMaterial', 'angular-filepicker', 'ngCart', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'validation.match']).config(function ($routeProvider, $locationProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map
