'use strict';

angular.module('adsviewerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cotizaciones', {
        template: '<cotizaciones></cotizaciones>',
        authenticate: true
      });
  });
