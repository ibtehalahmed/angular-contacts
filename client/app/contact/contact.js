'use strict';

angular.module('newApp3App')
  .config(function($stateProvider) {
    $stateProvider
      .state('contact-create', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm'
      })
        .state('contact', {
          url: '/contact/:contactId',
          templateUrl: 'app/contact/contact.html',
          controller: 'ContactController',
          controllerAs: 'vm',
        });
  });
