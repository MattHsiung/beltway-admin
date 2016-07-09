import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import './app.sass';

angular.module('app', [
  uiRouter,
  ngMaterial,
  Common.name,
  Components.name
])
.config(($urlRouterProvider, $locationProvider, $mdThemingProvider) => {
  "ngInject";
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $urlRouterProvider.when('/auth/:provider', () => window.location.reload());
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');
})

.component('app', AppComponent)

.run(function ($rootScope, AuthFactory, $state) {
  "ngInject";
  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {

    if (toState.requireAuth && !AuthFactory.isAuthenticated()){
      $state.go("login");
      event.preventDefault();
    };
  });
});