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

  .controller('MyCtrl2', function($scope) {

  	$scope.kitties = [
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "img/carl.png",
			adopted: false
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "img/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "img/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "img/princessmew.png",
			adopted: false
		}
	]

  })

 .controller('AngularIn60Ctrl', function($scope) {

 	$scope.names = [
		{person:'Andrew', age:36}, 
		{person:'Maren',age: 32},
		{person:'Schmitty', age:56}]

  })

 .controller('ModelCitizen', function($scope) {

 	$scope.names = [
		{person:'Andrew', age:36}, 
		{person:'Maren',age: 32},
		{person:'Schmitty', age:56}]

  });

