/**
 * Created by ThinKloud on 13/03/2016.
 */
angular.module('newApp3App').filter('localize', function () {
  return function (input) {
    var key = localStorage.getItem('language');
    return input ? input[key] : '';
  };
});
