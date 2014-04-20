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

 	$scope.songs = [
		{title: 'THIS LOVE', artist: 'MAROON 5', singer: 'Keith', image: "img/keith.png"},
		{title: 'GET BACK', artist: 'THE BEATLES', singer: 'Marc', image: "img/marc.png"},
		{title: 'TAKIN IT TO THE STREETS', artist: 'DOOBIE BROTHERS', singer: 'Keith', image: "img/keith.png"},
		{title: 'VERTIGO', artist: 'U2', singer: 'Marc', image: "img/marc.png"},
		{title: 'TAKE ME TO THE PILOT', artist: 'ELTON JOHN', singer: 'Keith', image: "img/keith.png"}, 
		{title: 'WHAT’S YOUR NAME', artist: 'LYNYRD SKYNAYRD', singer: 'Keith', image: "img/keith.png"},
		{title: 'BOULEVARD BROKEN', artist: 'GREEN DAY', singer: 'Marc', image: "img/marc.png"},
		{title: 'JUST WHAT I NEEDED', artist: 'CARS', singer: 'Keith', image: "img/keith.png"},
		{title: 'BLUE MORNING', artist: 'FOREIGNER', singer: 'Marc', image: "img/marc.png"},
		{title: 'HOLD THE LINE', artist: 'TOTO', singer: 'Marc', image: "img/marc.png"},
		{title: 'JET', artist: 'WINGS', singer: 'Marc', image: "img/marc.png"},
		{title: 'POWER OF LOVE', artist: 'HUEY LEWIS', singer: 'Keith', image: "img/keith.png"},
		{title: 'ARE YA GONNA GO MY WAY', artist: 'LENNY KRAVITZ', singer: 'Marc', image: "img/marc.png"},
		{title: 'LAST DANCE WITH MARY JANE', artist: 'TOM PETTY', singer: 'Keith', image: "img/keith.png"},
		{title: 'I DON’T WANNA BE', artist: 'GAVIN DEGRAW', singer: 'Keith', image: "img/keith.png"},
		{title: 'IT’S TIME', artist: 'IMAGINE DRAGONS', singer: 'Marc', image: "img/marc.png"},
		{title: 'USE SOMEBODY', artist: 'KINGS OF LEON', singer: 'Marc', image: "img/marc.png"},
		{title: 'HOWLIN’ FOR YOU', artist: 'BLACK KEYS', singer: 'Marc', image: "img/marc.png"},
		{title: 'SARA SMILE', artist: 'HALL & OATES', singer: 'Keith', image: "img/keith.png"},
		{title: 'RAMBLE ON', artist: 'LED ZEPPELIN', singer: 'Marc', image: "img/marc.png"},
		{title: 'SATURDAY NITE’S ALRIGHT', artist: 'ELTON JOHN', singer: 'Marc', image: "img/marc.png"},
		{title: 'YOU GET WHAT YOU GIVE', artist: 'NEW RADICALS', singer: 'Marc', image: "img/marc.png"},
		{title: 'BLACK FRIDAY', artist: 'STEELY DAN', singer: 'Keith', image: "img/keith.png"},
		{title: 'GET LUCKY', artist: 'DAFT PUNK', singer: 'Marc', image: "img/marc.png"},
		{title: 'JUST LIKE HEAVEN', artist: 'THE CURE', singer: 'Marc', image: "img/marc.png"},
		{title: 'LOCKED OUTTA HEAVEN', artist: 'BRUNO MARS', singer: 'Marc', image: "img/marc.png"},
		{title: 'KISS ON MY LIST', artist: 'HALL & OATES', singer: 'Keith', image: "img/keith.png"},
		{title: 'ROLLIN’ IN THE DEEP', artist: 'ADELE', singer: 'Marc', image: "img/marc.png"},
		{title: 'LADY MADONNA', artist: 'THE BEATLES', singer: 'Marc', image: "img/marc.png"},
		{title: 'YOU MAY BE RIGHT', artist: 'BILLY JOEL', singer: 'Keith', image: "img/keith.png"},
		{title: 'KISS', artist: 'PRINCE', singer: 'Paul', image: "img/paul.png"},
		{title: 'BEAST OF BURDEN', artist: 'THE ROLLING STONES', singer: 'Marc', image: "img/marc.png"},
		{title: 'LEARN TO FLY', artist: 'FOO FIGHTERS', singer: 'Marc', image: "img/marc.png"},
		{title: 'PANAMA', artist: 'VAN HALEN', singer: 'Marc', image: "img/marc.png"}]

	 	$scope.addOne = function() {
	    $scope.songs.push({title:$scope.title, artist:$scope.artist, singer:$scope.singer});
	    $scope.title = null;
	    $scope.artist = null;
	    $scope.singer = null;
	    };


  });

