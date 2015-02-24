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
      general: ['https://i.imgur.com/tva9bKo.jpg', 'https://i.imgur.com/i4pEuhF.jpg', 'https://i.imgur.com/LkXkJoc.jpg', 'https://i.imgur.com/jpBxVKx.jpg', 'https://i.imgur.com/BA3opAv.jpg', 'https://i.imgur.com/re5kihW.jpg', 'https://i.imgur.com/TqltUPd.jpg', 'https://i.imgur.com/GDqryNI.jpg', 'https://i.imgur.com/TZk5iJf.jpg', 'https://i.imgur.com/gfTBFgG.jpg', 'https://i.imgur.com/WnjqORW.jpg', 'https://i.imgur.com/P3X3mkq.jpg', 'https://i.imgur.com/fSq8Ei5.jpg', 'https://i.imgur.com/rPA95jE.jpg', 'https://i.imgur.com/90EkQIR.jpg', 'https://i.imgur.com/2xeALdm.jpg'],
      livingSpace: ['https://i.imgur.com/yfWzqdP.jpg', 'https://i.imgur.com/7FottSo.jpg', 'https://i.imgur.com/TJzox0i.jpg', 'https://i.imgur.com/4rvTqte.jpg', 'https://i.imgur.com/CBawIjD.jpg', 'https://i.imgur.com/FPVvEZQ.jpg', 'https://i.imgur.com/NOy5BUg.jpg', 'https://i.imgur.com/hvCUtnY.jpg', 'https://i.imgur.com/YMXnwE4.jpg', 'https://i.imgur.com/vRwo15B.jpg', 'https://i.imgur.com/3cz5i2U.jpg', 'https://i.imgur.com/ihrUwEg.jpg', 'https://i.imgur.com/unusuy3.jpg', 'https://i.imgur.com/i0gsx5D.jpg', 'https://i.imgur.com/ju57hno.jpg', 'https://i.imgur.com/JbCX3Ck.jpg', 'https://i.imgur.com/hxL1jfC.jpg', 'https://i.imgur.com/SsBvWjz.jpg', 'https://i.imgur.com/1T52ZDW.jpg', 'https://i.imgur.com/D0KISy5.jpg', 'https://i.imgur.com/ExMpffF.jpg'],
      bathrooms: ['https://i.imgur.com/Db5qoKP.jpg', 'https://i.imgur.com/dHT851R.jpg', 'https://i.imgur.com/iae6H3v.jpg', 'https://i.imgur.com/Y3UEz5d.jpg', 'https://i.imgur.com/2ENASLQ.jpg', 'https://i.imgur.com/3zJPZEl.jpg', 'https://i.imgur.com/lPFixpq.jpg', 'https://i.imgur.com/QF1Ruly.jpg'],
      rooms: ['https://i.imgur.com/rWDIQ2t.jpg', 'https://i.imgur.com/xPfuKXw.jpg', 'https://i.imgur.com/pXNEUDG.jpg', 'https://i.imgur.com/oL6WK6m.jpg']
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

  .controller('TestimonialController', [function () {
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
