'use strict'

var app = angular.module('myApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('rest', {
    url: '/',
    templateUrl: '/html/rest.html',
    controller: "mainCtrl"
  })
  
  $urlRouterProvider.otherwise('/');
})
