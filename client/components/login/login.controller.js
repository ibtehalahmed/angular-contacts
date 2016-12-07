'use strict';

class LoginDialogController {
  //start-non-standard
  user = {
    gender: 1
  };
  errors = {};
  //end-non-standard


  self = this;
  isLogging = false;

  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;

    this.self = this;
  }

  register(form) {

    if (form.$valid) {
      this.isLogging = true;
      Pace.stop();
      Pace.start();
      this.Auth.createUser({
          userName: this.user.userName,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          gender: this.user.gender,
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Account created, redirect to home
          //this.$state.go('main');
          $('#loginDialog').modal('hide');
        })
        .catch(err => {
          err = err.data;
          self.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
          this.isLogging = false;
        }).finally(Pace.stop);

    }
  }

  onEmailChange(form) {
    form.email.$setValidity('mongoose', true);
    this.errors.email = '';
  }

  login(form) {
    if (form.$valid) {
      this.isLogging = true;
      Pace.stop();
      Pace.start();
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then((user) => {
          // Logged in, redirect to home
          //this.$state.go('main');
          //console.log(user, 'user');
          $('#loginDialog').modal('hide');
          this.isLogging = false;
        })
        .catch(err => {
          this.errors.other = err.message;
          this.isLogging = false;
        })
        .finally(Pace.stop);
    }
  }
}

angular.module('newApp3App')
  .controller('LoginDialogController', LoginDialogController);
