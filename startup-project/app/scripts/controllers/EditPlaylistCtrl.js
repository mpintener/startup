'use strict';

/**
 * @ngdoc function
 * @name startupProjectApp.controller:EditplaylistctrlCtrl
 * @description
 * # EditplaylistctrlCtrl
 * Controller of the startupProjectApp
 */
angular.module('startupProjectApp')
  .controller('EditPlaylistCtrl', ['$scope', '$state', 'SpotifyService', function ($scope, $state, SpotifyService) {

    $scope.savedPlaylist = SpotifyService.getSavedPlaylist();
    $scope.savedPlaylist.tracks = [];

    $scope.currentUser = SpotifyService.getSavedUser();

    /*Show current playlist tracks*/
    $scope.showTracks = function () {
        SpotifyService.getTracksFromPlaylist($scope.savedPlaylist.id, $scope.currentUser.id)
        .then(function(data){
          data.items.forEach(function(s){
            console.log(s);
            $scope.savedPlaylist.tracks.push(s.track);
          });
        }, function(error){
          console.log(error);
        });

    };

    $scope.showTracks();



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

    /*Add selected tracks and save the array*/
    $scope.addTracks = function (track) {
      $scope.savedPlaylist.tracks.push(track);
      SpotifyService.storePlaylist($scope.savedPlaylist);
    //  SpotifyService.storePlaylist($scope.savedPlaylist.tracks);
    };

    $scope.editPlaylist = function () {
      console.log($scope.savedPlaylist.tracks);
      SpotifyService.editPlaylist($scope.currentUser.id, $scope.savedPlaylist.id, $scope.savedPlaylist.tracks)
      .then(
        function (data) {
          console.log("Everything's ok");
          $state.go('profile');
        }, function (error) {

        });
    };





  }]);
