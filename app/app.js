'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStores', [
  'ngRoute',
  'templateStores.view1',
  'templateStores.view2',
  'templateStores.facebook',
  'templateStores.gmail',
  'templateStores.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
