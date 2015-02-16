'use strict';

/**
 * @ngdoc function
 * @name blueridgeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blueridgeApp
 */
angular.module('blueridgeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
