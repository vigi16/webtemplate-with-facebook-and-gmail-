'use strict';

angular.module('templateStores.gmail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gmail', {
    templateUrl: 'gmail/gmail.html',
    controller: 'GmailCtrl'
  });
}])

.controller('GmailCtrl', [function() {

}]);