'use strict';


angular.module('newApp3App', [
  'newApp3App.auth',
  'newApp3App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'pascalprecht.translate',
  'ui.select',
  'ngFileUpload',
  'textAngular',
  'daterangepicker',
  'djds4rce.angular-socialshare',
  'angular-carousel',
  'checklist-model',
  'LocalStorageModule',
  'isteven-multi-select',
  'angular-img-cropper',
  '720kb.datepicker'
]).run(function ($FB) {
    $FB.init('145634995501895');
  })
  .config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/404');
    $stateProvider.state('404', {
      url: '/404',
      templateUrl: '../../404.html'
    })
    $locationProvider.html5Mode(true);
    //$locationProvider.html5Mode(true).hashPrefix('!');
  })

  .config(['$provide', '$translateProvider', function ($provide, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.json'
    });
    var defLang = 'ar-eg';
    window.localStorage.setItem('language', defLang);
    var lang = window.localStorage.getItem('language') ? window.localStorage.getItem('language') : defLang;

    $translateProvider.preferredLanguage(lang);
    $translateProvider.useLoaderCache(true);
    $translateProvider.useSanitizeValueStrategy('escaped');

    // text angular
    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
      // $delegate is the taOptions we are decorating
      // register the tool with textAngular
      /*taRegisterTool('colourRed', {
       iconclass: "fa fa-square red",
       action: function(){
       this.$editor().wrapSelection('forecolor', 'red');
       }
       });*/
      // add the button to the default toolbar definition
      //taOptions.toolbar[1].push('colourRed');
      taOptions.toolbar = [
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
        ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'/*, 'redo', 'undo', 'clear'*/],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
        [/*9'html', 'insertImage','insertLink', 'insertVideo', */'wordcount', 'charcount']
      ];
      return taOptions;
    }]);
  }])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('arzaq')
      .setStorageType('sessionStorage')
      .setNotify(true, true);

  });

