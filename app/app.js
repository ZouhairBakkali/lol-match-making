var LoL = (function() {
	'use strict';

	// Declare app level module which depends on filters, and services
	return angular.module('LoL', [
	  'ngRoute'
	]).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/maps', {templateUrl: 'components/views/maps/maps.html', controller: 'MapsCtrl'});
	  $routeProvider.when('/matchmaking', {templateUrl: 'components/views/matchmaking/matchmaking.html', controller: 'MatchmakingCtrl'});
	  $routeProvider.otherwise({redirectTo: '/matchmaking'});
	}]);
})();

