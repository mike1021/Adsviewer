'use strict';

angular.module('adsviewerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ad', {
        template: '<ad></ad>'
      });
  });
