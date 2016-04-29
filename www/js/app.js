// Ionic Starter App


angular.module('starter',
  ['starter.controllers',
    'starter.services',
    'starter.directives',
    'starter.filters',
    'starter.constants',
    'ui.router',
    'ngLocale'
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
    .state('thread',{
      url:'/thread',
      template:'<div ui-view=""></div>',
     // abstract:true
    })
    .state('thread.list',{
      url:'/list',
      templateUrl:'templates/threadlist.html',
      controller:'ThreadListCtrl as vm'
    })
    .state("tree",{
      url:'/tree',
      templateUrl:'templates/tree.html',
      controller:'ThreadTreeCtrl as vm'
    })
  $urlRouterProvider.otherwise('/login');

});
