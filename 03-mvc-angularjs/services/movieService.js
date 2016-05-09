angular.module('myApp')
  .factory('movieService', ['store',
  function(store) {
    var that = this;
    this.movies = [
        {
          id:'1',
          title:'Deadpool',
          year:'2015',
          genre:'Action'
        },
        {
          id:'2',
          title:'The Danish Girl',
          year:'2015',
          genre:'Drama'
        },
        {
          id:'3',
          title:'Batman vs Superman',
          year:'2016',
          genre:'Action'
        },
        {
          id:'4',
          title:'Avengers 2',
          year:'2015',
          genre:'Action'
        }
      ];

      //save a movie
  this.storeMovie = function(movie){
    store.set('movie', movie);
  }

  this.getStoredMovie = function(){
    var savedMovie = store.get('movie');
    return savedMovie;
  }

  this.saveArray = function(){
    store.set('movies', this.movies);
  }
//add a movie
  this.addMovie = function(movie){
    this.movies.push(movie);
  }

//delete a movie
  this.deleteMovie = function(movie){
    this.movies.forEach(function(m,i){
      if(movie.id === m.id){
        this.movies.splice(i,1);
      }
    }, this);
  }
//edit a movie
  this.editAMovie = function(movie){
      this.movies.forEach(function(m,i){
        if(m.id === movie.id){
          m.title = movie.title;
          m.year = movie.year;
          m.genre = movie.genre;
        }
      }, this);

  }

  this.getAll = function(){
    return this.movies;
  }

//public
return{
  storeMovie: function(movie){
    that.storeMovie(movie);
  },
  getMovie: function(){
    return that.getStoredMovie();
  },
  addMovie: function(movie){
    that.addMovie(movie);
    that.saveArray();
  },
  deleteMovie: function(movie){
    that.deleteMovie(movie);
    that.saveArray();
  },
  editAMovie: function(movie){
    that.editAMovie(movie);
    that.saveArray();
  },
  getAll: function(){
    return that.getAll();
  }

}

}]);
