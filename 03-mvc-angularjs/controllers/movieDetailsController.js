angular.module('myApp')
  .controller('movieDetailsController',['$scope','$state','movieService',
  function($scope, $state, movieService){

      $scope.selectedMovie = movieService.getMovie();
  }
]);
