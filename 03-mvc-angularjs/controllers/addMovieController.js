var myApp = angular.module('myApp');

myApp.controller('addMovieController',['$scope','$state','movieService', function($scope,$state,movieService) {

      $scope.movie = movieService.getMovie();

      $scope.saveMovie = function(){
        movieService.addMovie($scope.movie);
        $state.go('movies');

      }

}]);
