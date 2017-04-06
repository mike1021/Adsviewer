'use strict';

angular.module('adsviewerApp.auth', ['adsviewerApp.constants', 'adsviewerApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
