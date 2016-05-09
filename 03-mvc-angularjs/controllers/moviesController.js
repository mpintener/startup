var myApp = angular.module('myApp');

myApp.controller('moviesController',['$scope','$state','movieService', function($scope,$state,movieService) {

  $scope.movies = movieService.getAll();

  $scope.seeMovie = function(movie){
    movieService.storeMovie(movie);
    $state.go('details');
  }

  $scope.editMovie = function(movie){
    movieService.storeMovie(movie);
    $state.go('form');
  }

  $scope.addMovie = function(movie){
    movieService.storeMovie(movie);
    $state.go('addForm');
  }

  $scope.delete = function(movie){
    movieService.storeMovie(movie);
    movieService.deleteMovie(movie);
    $state.go('movies');
  }


}]);
