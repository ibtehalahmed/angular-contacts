'use strict';

class NavbarController {

  cartcount = 0;
  isCollapsed = true;
  //end-non-standard

  onUserLogin(self) {
    self.$rootScope.$on('userLogin', function (evt, user) {
      self.userName = user.userName || user.firstName;
    });


  }

  constructor($http, $scope, $state, Auth, $rootScope, localStorageService) {
    this.$scope = $scope;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$http = $http;
    this.Auth = Auth;
    this.lang = localStorage.getItem('language') == 'en-us';
    this.localStorageService = localStorageService;
    var self = this;
    Auth.getCurrentUser(function (user) {
      self.currentUser = user;
      self.userName = user.userName || user.firstName;

      self.onUserLogin(self);

    });


    $http.get('../../config/links.json').then(res=> {
      self.socialNetwork = res.data.social_network;

    });

  }

  login() {
    console.log('login');
    this.Auth.showLogin();

  }

  showLogin() {
    $("#showloginDialog").toggle(
      this.toggle = !this.toggle
    );
  }

}

angular.module('newApp3App')
  .controller('NavbarController', NavbarController);
