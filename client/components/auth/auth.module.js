'use strict';

angular.module('newApp3App.auth', [
    'newApp3App.constants',
    'newApp3App.util',
    'ngCookies',
    'ui.router'
  ])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
