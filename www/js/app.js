// Ionic Starter App


angular.module('starter',
  ['starter.controllers',
    'starter.services',
    'starter.directives',
    'starter.filters',
    'starter.constants',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('register', {
      url:'/register',
      templateUrl: 'templates/register.html',
      controller:'RegisterCtrl'
    })
      .state('login', {
        url:'/login',
        templateUrl: 'templates/login.html',
      controller:'LoginCtrl'
      })

    .state('main', {
      url:'/main/:userName',
      templateUrl: 'templates/main.html',
      controller:'MainCtrl'
    })
    .state('main.news', {
      url:'/main/:userName',
      templateUrl: 'templates/main.html',
      controller:'MainCtrl'
    })
  $urlRouterProvider.otherwise('/login');

});
