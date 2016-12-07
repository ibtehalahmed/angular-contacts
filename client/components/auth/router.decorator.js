'use strict';

(function () {

  angular.module('newApp3App.auth')
    .run(function ($rootScope, $state, Auth) {
      // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
      $rootScope.$on('$stateChangeStart', function (event, next) {
        if (!next.authenticate) {
          return;
        }


        if (typeof next.authenticate === 'string') {
          Auth.hasRole(next.authenticate, _.noop).then(has => {

            if (has) {
              return;
            }

            event.preventDefault();
            $state.go('main')

          });
        } else {
          Auth.isLoggedIn(_.noop).then(is => {
            if (is) {
              return;
            }

            event.preventDefault();
            Auth.showLogin();
            //$state.go('main');
          });
        }
      });
    });

})();
