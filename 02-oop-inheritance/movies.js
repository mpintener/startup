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
}

class Logger {
  constructor(){}
  log(info){
    console.log('output: The' + info + 'event has been emitted');
  }
}

let movie1 = new Movie('127 Hours', 2010, '120 min');
let logger = new Logger();
movie1.on('play', logger.log);
movie1.play();
