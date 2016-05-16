'use strict';

/**
 * @ngdoc function
 * @name startupProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the startupProjectApp
 */
angular.module('startupProjectApp')
  .controller('ProfileCtrl',['$scope', '$state', 'SpotifyService', function ($scope, $state, SpotifyService) {

    $scope.User = {};
    $scope.playlists = [];

    $scope.loadUserInfo = function () {
      SpotifyService.getUserInfo().then(
        function(result){
          $scope.User = result;
          console.log($scope.User);
          SpotifyService.storeUser($scope.User);
        }, function (error) {

      });
    };

    $scope.loadUserInfo();


    $scope.loadUserPlaylists = function () {
      SpotifyService.getUserPlaylists($scope.User.id).then(
        function (data) {
          data.items.forEach(function (i) {
            if(i.owner.id === $scope.User.id){
              $scope.playlists.push(i);
            }
          });
        }, function (error) {

        });
    };

    $scope.loadUserPlaylists();
    

    $scope.addPlaylist = function () {
      $state.go('addPlaylist');
    };
/*
    $scope.selectPlaylist = function (playlist) {
      SpotifyService.storePlaylistforDetails(playlist);
      $state.go('playlist-details');
    };*/

    $scope.selectPlaylist = function (playlist) {
      SpotifyService.storePlaylist(playlist);
      $state.go('editPlaylist');
    };

  }]);
