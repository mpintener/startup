var myApp = angular.module('myApp');

myApp.controller('editMovieController',['$scope','$state','movieService', function($scope,$state,movieService) {

      $scope.movie = movieService.getMovie();

      $scope.saveMovie = function(){
        movieService.editAMovie($scope.movie);
        $state.go('movies');
      }

}]);
