class EventEmitter {
  constructor(){
    this.events = {

    }
  }

  on(event, callback){
    this.events[event] = callback
  }

  emit(event){
    this.events[event](event)
  }

  off(event){
    delete this.events[event]
  }
}

class Movie  extends EventEmitter {
  constructor(title, year, duration) {
    super()
    this.title = title
    this.year = year
    this.duration  = duration
    this.actors = []
  }
  play(){
    this.emit('play')
  }
  pause(){
    this.emit('pause')
  }
  resume(){
    this.emit('resume')
  }
  addCast(actor){
    let that = this.actors
    if(Array.isArray(actor))
    {
      actor.forEach(function(a){
        that.push(a);
      });
    } else {
      that.push(actor);
    }

  }
}

class Logger {
  constructor(){}
  log(info){
    console.log('output: The' + info + 'event has been emitted')
  }
}

let movie1 = new Movie('Deadpool', 2010, '120 min');
let logger = new Logger();
movie1.on('play', logger.log);
movie1.play();

let Social = {

  shareFriend: function(friendName){
    console.log(`Share ${this.title} with ${friendName}`)
  },
  like: function(friendName){
    console.log(`${friendName} likes ${this.title}`)
  }
}

let mix = Object.assign(movie1, Social);
mix.shareFriend('James Franco');
mix.like('James Franco');

class Actor {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

let ryan = new Actor('Ryan Reynolds', 47);
let otherCast =  [
  new Actor('Gina Carano', 35),
  new Actor('Ed Skrein', 38),
  new Actor('T. J. Miller', 32)
];

movie1.addCast(ryan);
movie1.addCast(otherCast);
console.log(movie1);
