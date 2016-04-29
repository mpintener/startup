import EventEmitter from 'js/classes/EventEmitter'
import Actor from 'js/classes/Actor'
import Logger from 'js/classes/Logger'
import Movie from 'js/classes/Movie'
import Social from 'js/classes/Social'


let movie1 = new Movie('Deadpool', 2010, '120 min');
console.log(Movie1);
let logger = new Logger();
movie1.on('play', logger.log);
movie1.play();
let mix = Object.assign(movie1, Social);
mix.shareFriend('James Franco');
mix.like('James Franco');



let ryan = new Actor('Ryan Reynolds', 47);
let otherCast =  [
  new Actor('Gina Carano', 35),
  new Actor('Ed Skrein', 38),
  new Actor('T. J. Miller', 32)
];

movie1.addCast(ryan);
movie1.addCast(otherCast);
console.log(movie1);
