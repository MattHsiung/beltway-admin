import angular from 'angular';
import uiRouter from 'angular-ui-router';
import apiComponent from './api.component';
import apiService from './api.service';

let apiModule = angular.module('api', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('api', {
      url: '/apidata',
      template: '<api user="vm.auth.user"></api>'
    });
})

.service('apiService', apiService)
.component('api', apiComponent);

export default apiModule;