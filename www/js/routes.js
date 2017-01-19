angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.about', {
    url: '/about',
    views: {
      'tab2': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsController.contact', {
    url: '/contact',
    views: {
      'tab3': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/stones',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.stones', {
    url: '/stones',
    views: {
      'tab1': {
        templateUrl: 'templates/stones.html',
        controller: 'stonesCtrl'
      }
    }
  })

  .state('tabsController.sand', {
    url: '/sand',
    views: {
      'tab1': {
        templateUrl: 'templates/sand.html',
        controller: 'sandCtrl'
      }
    }
  })

  .state('ballast', {
    url: '/ballast',
    templateUrl: 'templates/ballast.html',
    controller: 'ballastCtrl'
  })

  .state('tabsController.redSoil', {
    url: '/soil',
    views: {
      'tab1': {
        templateUrl: 'templates/redSoil.html',
        controller: 'redSoilCtrl'
      }
    }
  })

  .state('tabsController.machinery', {
    url: '/machinery',
    views: {
      'tab1': {
        templateUrl: 'templates/machinery.html',
        controller: 'machineryCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/register',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/stones/contact')

  

});