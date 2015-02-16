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
    'ui.router'
  ])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');

  	$stateProvider

  	.state('/', {
  		url: '/',
  		resolve: {
  			getWindowHeight: function ($window, windowSettings) {
  				windowSettings.height = $window.innerHeight;
  			}
  		},
  		templateUrl: '../views/home.html',
  		controller: 'HomeController',
  		controllerAs: 'home'
  	});
  }]);
