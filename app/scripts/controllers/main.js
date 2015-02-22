'use strict';

angular
	.module('blueridgeApp')

	.controller('AppController', ['$window', '$state', '$anchorScroll', '$location', 'Menu', function ($window, $state, $anchorScroll, $location, Menu) {
		var vm = this;
		vm.menuOpen = false;
  	vm.toggleMenu = toggleMenu;
  	vm.isActiveAnchor = isActiveAnchor;
		vm.setWindowHeight = {
			height: $window.innerHeight
		};
    vm.scrollTo = scrollTo;

    function scrollTo (id) {
      $location.hash(id);
      $anchorScroll();
    };

		function toggleMenu () {
			vm.menuOpen = !Menu.state;
			Menu.state = vm.menuOpen;
		};

		function isActiveAnchor (currentAnchor) {
			return $location.hash() === currentAnchor;
		};
	}])

  .controller('AboutController', ['$location', '$anchorScroll', function ($location, $anchorScroll) {
  	var vm = this;
  	vm.viewGallery = viewGallery;
  	vm.viewContact = viewContact;

  	function viewGallery () {
      $location.hash('gallery');
      $anchorScroll();
  	};

  	function viewContact () {
      $location.hash('contact');
      $anchorScroll();
  	};
  }])

  .controller('GalleryController', [function () {
  	var vm = this;
    vm.filter = filter;
    vm.isActive = isActive;

    vm.photos = {
      general: ['http://i.imgur.com/tva9bKo.jpg', 'http://i.imgur.com/i4pEuhF.jpg', 'http://i.imgur.com/LkXkJoc.jpg', 'http://i.imgur.com/jpBxVKx.jpg', 'http://i.imgur.com/BA3opAv.jpg', 'http://i.imgur.com/re5kihW.jpg', 'http://i.imgur.com/TqltUPd.jpg', 'http://i.imgur.com/GDqryNI.jpg', 'http://i.imgur.com/TZk5iJf.jpg', 'http://i.imgur.com/gfTBFgG.jpg', 'http://i.imgur.com/WnjqORW.jpg', 'http://i.imgur.com/P3X3mkq.jpg', 'http://i.imgur.com/fSq8Ei5.jpg', 'http://i.imgur.com/rPA95jE.jpg', 'http://i.imgur.com/90EkQIR.jpg', 'http://i.imgur.com/2xeALdm.jpg'],
      livingSpace: ['http://i.imgur.com/yfWzqdP.jpg', 'http://i.imgur.com/7FottSo.jpg', 'http://i.imgur.com/TJzox0i.jpg', 'http://i.imgur.com/4rvTqte.jpg', 'http://i.imgur.com/CBawIjD.jpg', 'http://i.imgur.com/FPVvEZQ.jpg', 'http://i.imgur.com/NOy5BUg.jpg', 'http://i.imgur.com/hvCUtnY.jpg', 'http://i.imgur.com/YMXnwE4.jpg', 'http://i.imgur.com/vRwo15B.jpg', 'http://i.imgur.com/3cz5i2U.jpg', 'http://i.imgur.com/ihrUwEg.jpg', 'http://i.imgur.com/unusuy3.jpg', 'http://i.imgur.com/i0gsx5D.jpg', 'http://i.imgur.com/ju57hno.jpg', 'http://i.imgur.com/JbCX3Ck.jpg', 'http://i.imgur.com/hxL1jfC.jpg', 'http://i.imgur.com/SsBvWjz.jpg', 'http://i.imgur.com/1T52ZDW.jpg', 'http://i.imgur.com/D0KISy5.jpg', 'http://i.imgur.com/ExMpffF.jpg'],
      bathrooms: ['http://i.imgur.com/Db5qoKP.jpg', 'http://i.imgur.com/dHT851R.jpg', 'http://i.imgur.com/iae6H3v.jpg', 'http://i.imgur.com/Y3UEz5d.jpg', 'http://i.imgur.com/2ENASLQ.jpg', 'http://i.imgur.com/3zJPZEl.jpg', 'http://i.imgur.com/lPFixpq.jpg', 'http://i.imgur.com/QF1Ruly.jpg'],
      rooms: ['http://i.imgur.com/rWDIQ2t.jpg', 'http://i.imgur.com/xPfuKXw.jpg', 'http://i.imgur.com/pXNEUDG.jpg', 'http://i.imgur.com/oL6WK6m.jpg']
    };
    vm.pictures = vm.photos.general;

    function filter (type) {
      switch (type) {
      case 'general':
        vm.pictures = vm.photos.general;
        break;
      case 'livingSpace':
        vm.pictures = vm.photos.livingSpace;
        break;
      case 'bathrooms':
        vm.pictures = vm.photos.bathrooms;
        break;
      case 'rooms': 
        vm.pictures = vm.photos.rooms;
        break;
      }
    };

    function isActive (type) {
      switch (type) {
      case 'general':
        return vm.pictures === vm.photos.general;
        break;
      case 'livingSpace':
        return vm.pictures === vm.photos.livingSpace;
        break;
      case 'bathrooms':
        return vm.pictures === vm.photos.bathrooms;
        break;
      case 'rooms': 
        return vm.pictures === vm.photos.rooms;
        break;
      }
    };
  }])

  .controller('ContactController', [function () {
  	var vm = this;
  }])

  .directive('menu', [function () {
  	return {
  		restrict: 'E',
  		controller: 'AppController',
  		controllerAs: 'app',
  		scope: {
  			isOpen: '=open'
  		},
  		bindToController: true,
  		templateUrl: 'views/menu.html',
  		link: function (scope, ele, attrs, ctrl) {
  			ele.find('#toggle').on('click', function () {
  				ctrl.toggleMenu();
  				scope.$apply();
  			})
  		}
  	}
  }])

  .factory('Menu', [function () {
  	return {
  		state: false
  	};
  }]);
