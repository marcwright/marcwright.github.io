'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', function($scope) {
  	// had to remove square brackets before function($scope)
  	$scope.names = [
		{letter:'a', leet:'4'}, 
		{letter:'b', leet:'|3'},
		{letter:'c', leet:'('}
		]

  	})

  .controller('MyCtrl2', function() {

  })

 .controller('AngularIn60Ctrl', function($scope) {

 	$scope.names = [
		{person:'Andrew', age:36}, 
		{person:'Maren',age: 32},
		{person:'Schmitty', age:56}]

  });

