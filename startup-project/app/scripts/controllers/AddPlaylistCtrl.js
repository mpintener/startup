'use strict';

/**
 * @ngdoc function
 * @name startupProjectApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the startupProjectApp
 */
angular.module('startupProjectApp')
  .controller('AddPlaylistCtrl', ['$scope', '$state', 'SpotifyService', function ($scope, $state, SpotifyService) {

    $scope.newPlaylist = {};
    $scope.q = '';
    $scope.searchResults = [];
    $scope.newPlaylist.tracks = [];


    $scope.currentUser = SpotifyService.getSavedUser();
    console.log($scope.currentUser);

    $scope.createPlaylist = function () {
      var conf = {
        name: $scope.newPlaylist.name
      };
      if($scope.newPlaylist.tracks.length > 0){
        SpotifyService.createPlaylist($scope.currentUser.id, conf).then(
          function (data) {
            SpotifyService.storePlaylist($scope.newPlaylist);
            console.log($scope.newPlaylist);
            console.log(data);
            SpotifyService.saveAPI(data.id, $scope.currentUser.id, $scope.newPlaylist.tracks).then(
              function () {
                $state.go('profile');
            }, function (error) {
              //reject
            });
          }, function (error) {
            //reject
          });
      }
    };

    /* Search for tracks */
    $scope.search = function () {
      var type = 'track';
      SpotifyService.search($scope.q, type).then(
        function (data) {
          $scope.searchResults = data.tracks.items;
        }, function (error) {
          //reject
        });
    };

    /* Add songs to a local array and save the playlist*/
    $scope.add = function (track) {
        $scope.newPlaylist.tracks.push(track);
        SpotifyService.storePlaylist($scope.newPlaylist);
        console.log($scope.newPlaylist);
    };

  }]);
