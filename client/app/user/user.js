'use strict';

angular.module('newApp3App')
    .config(function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/user/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });
    });
