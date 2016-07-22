import angular from 'angular';
import satellizer from 'satellizer';

import AuthFactory from './auth.factory';

let authModule = angular.module('app.auth', [
	'satellizer'
])
.factory('AuthFactory', AuthFactory)

.config(($authProvider, $httpProvider) => {
	"ngInject";
  $authProvider.tokenPrefix = 'beltwayAdmin';
	
});

export default authModule;