/**
 * Created by ibtehal on 10/11/16.
 */
'use strict';

(function () {

    class LoginController {

        constructor($http, $state, $stateParams, localStorageService) {
            this.$http = $http;
            this.$state = $state;
            this.$stateParams = $stateParams
            this.localStorageService = localStorageService;
    }
}

angular.module('newApp3App')
    .controller('LoginController', LoginController);

})();
