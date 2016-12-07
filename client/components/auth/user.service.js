//Share code or state across controllers — Use angular services
'use strict';

(function() {

function UserResource($resource) {
  return $resource('http://localhost:3030/api/v1/user/:id/:controller', {
    id: '@_id'
  }, {
    changePassword: {
      method: 'PUT',
      params: {
        controller:'password'
      }
    },
    get: {
      method: 'GET',
      params: {
        id:'me'
      }
    }
  });
}

angular.module('newApp3App.auth')
  .factory('User', UserResource);

})();
