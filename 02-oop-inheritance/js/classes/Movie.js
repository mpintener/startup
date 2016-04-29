import EventEmitter from 'js/classes/EventEmitter'

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

export default Movie;
