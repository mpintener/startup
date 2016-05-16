'use strict';

/**
 * @ngdoc service
 * @name startupProjectApp.SpotifyService
 * @description
 * # SpotifyService
 * Factory in the startupProjectApp.
 */
angular.module('startupProjectApp')
  .factory('SpotifyService', [
    'store',
    '$q',
    '$http',
    function (store, $q, $http) {

    //config for spotifyService
    this.config = {};
      this.config.clientId = null;
      this.config.redirectUri = null;
      this.config.scope = null;
      this.config.authToken = null;
      this.config.baseURL = 'https://api.spotify.com/v1';

    // playlist
    this.playlist = {};
      this.playlist.id = null;
      this.playlist.name = null;
      this.playlist.description = null;
      this.playlist.tracks = [];

    //User
    this.user = {};



    /*=============STORAGE=============*/

      this.storeUser = function (user) {
        store.set('user', user);
      };

      this.getSavedUser = function () {
        var savedUser = store.get('user');
        return savedUser;
      };

      this.storeToken = function (token) {
        store.set('token', token);
      };

      this.getSavedToken = function () {
        var savedToken = store.get('token');
        return savedToken;
      };

      this.storePlaylist = function (playlist) {
        store.set('playlist', playlist);
      };

      this.getSavedPlaylist = function () {
        var savedPlaylist = store.get('playlist');
        return savedPlaylist;
      };

    //User
      this.getUserInfo = function () {
        return this.callSpotifyAPI('/me', 'GET', null, null, this.getAuthHeaders());
      };

     /*=====PLAYLIST DETAILS======*/
      this.storePlaylistforDetails = function (playlist) {
        store.set('playlistDetails', playlist);
      };



      this.getTracksFromPlaylist = function (playlist_id, user_id) {
        return this.callSpotifyAPI('/users/' + user_id + '/playlists/' + playlist_id + '/tracks', 'GET', null, null, this.getAuthHeaders());
      };

      //=====EDIT A PLAYLIST===//
      this.newTracks = function () {
        return this.callSpotifyAPI('/users/' + user_id + '/playlists/' + playlist_id + 'tracks', 'POST', null, null, this.getAuthHeaders(true));
      };



/*
    //clientId
    this.setClientId = function (clientId){
      this.config.clientId = clientId;
      return this.config.clientId;
    };

    this.getClientId = function () {
      return this.config.clientId;
    };

    //redirectUri
    this.setRedirectUri = function (redirectUri) {
      this.config.redirectUri = redirectUri;
      return this.config.redirectUri;
    };

    this.getRedirectUri = function () {
      return this.redirectUri;
    };--*/

    //scope
    this.setScope  = function (scope) {
      this.config.scope = scope;
      return this.config.scope;
    };

    this.getScope = function () {
        return this.config.scope;
      };

    //authToken
      this.setAuthToken = function (authToken) {
        this.config.authToken = authToken;
        this.storeToken(authToken);
        return this.config.authToken;
      };

      this.getAuthToken = function () {
        this.config.authToken = this.getSavedToken();
        return this.config.authToken;
      };


      //=======Base URL ======//
      this.callSpotifyAPI = function(endpoint, method, params, data, headers){
        var deferred = $q.defer();

        $http({
          url: this.config.baseURL + endpoint,
          method: method ? method : 'GET',
          params: params,
          data: data,
          headers: headers
        })
          .success(function(data){
            deferred.resolve(data);
          })
          .error(function(data){
            deferred.reject(data);
          });

        return deferred.promise;
      };

      this.getAuthHeaders = function(json){
        var header = {
          'Authorization': 'Bearer' + ' ' + this.getAuthToken()
        };

        if(json){
          header['Content-Type'] = 'application/json';
        }

        return header;
      };


      this.getUserPlaylists = function (conf) {

        return this.callSpotifyAPI('/me/playlists/', 'GET', null, conf, this.getAuthHeaders());
      };

      this.saveAPI = function (playlist_id, user_id, tracks) {
        if(tracks){
          tracks.forEach(function(track, i){
            tracks[i] = 'spotify:track:' + track.id;
          });
        }
        var param = {
          uris: tracks.toString(),
          position: null
        };

        return this.callSpotifyAPI('/users/' + user_id + '/playlists/' + playlist_id + '/tracks', 'POST', {uris: tracks.toString(),
          position: null
      }, null, this.getAuthHeaders(true));
      };

  /*    this.setPlaylist = function (name, description) {
        this.playlist.name = name;
        this.playlist.description = description;
        this.storePlaylist(this.playlist);
    };
*/
      this.createPlaylist = function (user_id, opt) {
        return this.callSpotifyAPI('/users/' + user_id + '/playlists','POST', null, opt, this.getAuthHeaders(true));
      };

      this.getPlaylistTracks = function (user_id, playlist_id) {
        return this.callSpotifyAPI('/users/' + user_id + '/playlists/' + playlist_id + '/tracks', 'GET', null, null, this.getAuthHeaders());
      };
      this.editPlaylist = function (user_id, playlist_id, tracks) {
        var allTracks = [];

        tracks.forEach(function(t){
          allTracks.push(t);
        }, allTracks);
        if(allTracks){
          allTracks.forEach(function(track, i){
            allTracks[i] = 'spotify:track:' + track.id;
          });
        }

        return this.callSpotifyAPI('/users/' + user_id + '/playlists/' + playlist_id + '/tracks', 'PUT', {uris: allTracks.toString(),
          position: null
        }, null, this.getAuthHeaders(true));
    };



      /*this.addSong = function (tracksArray, track) {
        tracksArray.push(track);
        store.set
      };*/

      //----Search----//
      this.search = function (query, type) {
        var options = {};
        options.q = query;
        options.type = type;
        return this.callSpotifyAPI('/search', 'GET', options);
      };

      var that = this;
    // Public API here
      return {
        storeUser: function (user) {
          return that.storeUser(user);
        },
        getUserInfo: function () {
          return that.getUserInfo();
        },
        createPlaylist: function (user_id, opt) {
          return that.createPlaylist(user_id, opt);
        },
        storePlaylist: function (playlist) {
          return that.storePlaylist(playlist);
        },
        setPlaylist: function (name) {
          return that.setPlaylist(name);
        },
        getSavedUser: function () {
          return that.getSavedUser();
        },
        search: function (q , type) {
          return that.search(q , type);
        },
        addSong: function (tracksArray, track) {
          return that.addSong(tracksArray, track);
        },
        saveAPI: function (playlist_id, user_id, tracks) {
          return that.saveAPI(playlist_id, user_id, tracks);
        },
        getSavedPlaylist: function () {
          return that.getSavedPlaylist();
        },
        loadUserPlaylists: function () {
          return that.getUserPlaylists();
        },
        //PLAYLIST DETAILS
        storePlaylistforDetails: function (playlist) {
          return that.storePlaylistforDetails(playlist);
        },
        getPlaylistforDetails: function () {
          return that.getPlaylistforDetails();
        },

        //
        setAuthToken: function (token) {
          return that.setAuthToken(token);
        },
        getAuthToken: function () {
          return that.getAuthToken();
        },
        newTracks: function (user_id, playlist_id) {
          return that.newTracks(user_id, playlist_id)
        },
        getUserPlaylists: function (conf) {
          return that.getUserPlaylists(conf);
        },
        editPlaylist: function (user_id, playlist_id, tracks) {
          return that.editPlaylist(user_id, playlist_id, tracks);
        },
        getTracksFromPlaylist: function (playlist_id, user_id) {
          return that.getTracksFromPlaylist(playlist_id, user_id);
        }
      };

  }]);
