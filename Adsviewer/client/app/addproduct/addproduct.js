'use strict';

angular.module('adsviewerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addproduct', {
        template: '<addproduct></addproduct>'
      });
  });
