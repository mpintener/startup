(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

exports.default = Actor;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      this.events[event] = callback;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this.events[event](event);
    }
  }, {
    key: "off",
    value: function off(event) {
      delete this.events[event];
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: 'log',
    value: function log(info) {
      console.log('output: The' + info + 'event has been emitted');
    }
  }]);

  return Logger;
}();

exports.default = Logger;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require('js/classes/EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Movie).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.actors = [];
    return _this;
  }

  _createClass(Movie, [{
    key: 'play',
    value: function play() {
      this.emit('play');
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.emit('pause');
    }
  }, {
    key: 'resume',
    value: function resume() {
      this.emit('resume');
    }
  }, {
    key: 'addCast',
    value: function addCast(actor) {
      var that = this.actors;
      if (Array.isArray(actor)) {
        actor.forEach(function (a) {
          that.push(a);
        });
      } else {
        that.push(actor);
      }
    }
  }]);

  return Movie;
}(_EventEmitter3.default);

exports.default = Movie;

},{"js/classes/EventEmitter":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Social = {

  shareFriend: function shareFriend(friendName) {
    console.log("Share " + this.title + " with " + friendName);
  },
  like: function like(friendName) {
    console.log(friendName + " likes " + this.title);
  }
};

exports.default = Social;

},{}],6:[function(require,module,exports){
'use strict';

var _EventEmitter = require('js/classes/EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Actor = require('js/classes/Actor');

var _Actor2 = _interopRequireDefault(_Actor);

var _Logger = require('js/classes/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _Movie = require('js/classes/Movie');

var _Movie2 = _interopRequireDefault(_Movie);

var _Social = require('js/classes/Social');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movie1 = new _Movie2.default('Deadpool', 2010, '120 min');
console.log(Movie1);
var logger = new _Logger2.default();
movie1.on('play', logger.log);
movie1.play();
var mix = Object.assign(movie1, _Social2.default);
mix.shareFriend('James Franco');
mix.like('James Franco');

var ryan = new _Actor2.default('Ryan Reynolds', 47);
var otherCast = [new _Actor2.default('Gina Carano', 35), new _Actor2.default('Ed Skrein', 38), new _Actor2.default('T. J. Miller', 32)];

movie1.addCast(ryan);
movie1.addCast(otherCast);
console.log(movie1);

},{"js/classes/Actor":1,"js/classes/EventEmitter":2,"js/classes/Logger":3,"js/classes/Movie":4,"js/classes/Social":5}]},{},[6])


//# sourceMappingURL=build.js.map
