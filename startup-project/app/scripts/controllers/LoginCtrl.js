'use strict';

/**
 * @ngdoc function
 * @name startupProjectApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the startupProjectApp
 */
angular.module('startupProjectApp')
  .controller('LoginCtrl',['$scope', '$state', 'SpotifyService', function ($scope, $state, SpotifyService) {

    OAuth.initialize('-4NcuwZ_FuV_u03M-8F-4-c0Sho');

    $scope.login = function () {

      OAuth.popup('spotify').done(function(result) {
        console.log(result);
        SpotifyService.setAuthToken(result.access_token);
        $state.go('profile');

      });
    };


    }]);
