'use strict';

/**
 * @ngdoc overview
 * @name blueridgeApp
 * @description
 * # blueridgeApp
 *
 * Main module of the application.
 */
angular
  .module('blueridgeApp', [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'wu.masonry'
  ])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
  	$urlRouterProvider.otherwise('/');

  	$stateProvider

  	.state('home', {
  		url: '/',
  		templateUrl: '../views/home.html'
  	});
  }]);
