'use strict';

/**
 * @ngdoc function
 * @name startupProjectApp.controller:PlaylistdetailsCtrl
 * @description
 * # PlaylistdetailsCtrl
 * Controller of the startupProjectApp
 */
angular.module('startupProjectApp')
  .controller('PlaylistDetailsCtrl',['$scope', '$state', 'SpotifyService', function ($scope, $state, SpotifyService) {

    $scope.savedPlaylist = SpotifyService.getSavedPlaylist();
    $scope.savedPlaylist.tracks = [];

    $scope.currentUser = SpotifyService.getSavedUser();

    $scope.showTracks = function () {
      SpotifyService.getTracksFromPlaylist($scope.savedPlaylist.id, $scope.currentUser.id).then(
        function (data) {
          data.items.forEach(function (s) {
            $scope.savedPlaylist.tracks.push(s.track);
          });
        }, function (error) {

        });
    };

    $scope.showTracks();

    $scope.editPlaylist = function (){
      $state.go('editPlaylist');
    };



  }


  ]);
