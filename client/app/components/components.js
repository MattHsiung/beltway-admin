import angular from 'angular';
import Home from './home/home';
import Login from './login/login';
import Api from './api/api';

let componentModule = angular.module('app.components', [
  Home.name,
  Login.name,
  Api.name
]);

export default componentModule;
