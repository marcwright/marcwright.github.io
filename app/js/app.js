'use strict';

// var app = angular.module('myApp', []);

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
  ]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/view1', 
        {
          templateUrl: 'partials/partial1.html', 
          controller: 'MyCtrl1'
        })
      .when('/view2', 
        {
          templateUrl: 'partials/partial2.html', 
          controller: 'MyCtrl2'
        })
      .when('/angular', 
        {
          templateUrl: 'partials/angularIn60.html', 
          controller: 'AngularIn60Ctrl'
        })
      .when('/model', 
        {
          templateUrl: 'partials/modelcitizen.html', 
          controller: 'ModelCitizen'
        })
      .otherwise(
        {
          redirectTo: '/view1'
        });
}]);
