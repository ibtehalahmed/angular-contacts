'use strict';

angular.module('newApp3App')
  .directive('login', () => ({
    templateUrl: 'components/login/login.html',
    restrict: 'E',
    controller: 'LoginDialogController',
    controllerAs: 'vm'
  }));
