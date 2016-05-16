'use strict';

/**
 * @ngdoc overview
 * @name startupProjectApp
 * @description
 * # startupProjectApp
 *
 * Main module of the application.
 */
angular
  .module('startupProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angular-storage'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: '../views/main.html',
        controller: 'LoginCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: '../views/profile.html',
        controller: 'ProfileCtrl'
      })
    .state('addPlaylist', {
      url: '/addPlaylist',
      templateUrl: '../views/addPlaylist.html',
      controller: 'AddPlaylistCtrl'
    })
    .state('playlist-details',{
        url: '/playlist-details',
        templateUrl: '../views/playlistdetails.html',
        controller: 'PlaylistDetailsCtrl'
      })
    .state('editPlaylist',{
        url: '/playlist-edit',
        templateUrl: '../views/editplaylist.html',
        controller: 'EditPlaylistCtrl'
      });
  });
