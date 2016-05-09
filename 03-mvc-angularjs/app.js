var myApp = angular.module('myApp', ['ui.router','angular-storage']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/movies");
  //
  // Now set up the states
  $stateProvider
    .state('movies', {
      url: "/movies",
      templateUrl: "/movies.html",
      controller: "moviesController"
    })
    .state('details', {
      url: "/details",
      templateUrl: "/moviesdetails.html",
      controller: "movieDetailsController"
    })
    .state('form', {
      url: "/form",
      templateUrl: "/updateForm.html",
      controller: "editMovieController"
    })
    .state('addForm',{
      url: "/addFrom",
      templateUrl: "/updateForm.html",
      controller: "addMovieController"
    })

});
