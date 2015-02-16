'use strict';

angular
	.module('blueridgeApp')

  .controller('HomeController', ['windowSettings', function (windowSettings) {
   var vm = this;

   vm.windowHeight = {
   	height: windowSettings.height
   };
   
  }])

  .controller('MenuController', ['windowSettings', function	(windowSettings) {
  	var vm = this;

  	vm.isOpen = false;
  	vm.toggleMenu = toggleMenu;

		function toggleMenu() {
			vm.isOpen = !vm.isOpen;
			console.log(vm.isOpen);
		};
  }])

  .directive('menu', ['windowSettings', function (windowSettings) {
  	return {
  		restrict: 'E',
  		controller: 'MenuController',
  		controllerAs: 'menu',
  		scope: {
  			isOpen: '=menu'
  		},
  		bindToController: true,
  		templateUrl: 'views/menu.html',
  		link: function (scope, ele, attrs, ctrl) {
  			ele.on('click', function () {
  				ctrl.toggleMenu();
  				scope.$apply();
  				console.log('new value', ctrl.isOpen);
  			})
  		}
  	}
  }])

  .factory('windowSettings', [function () {
  	return {};
  }]);
