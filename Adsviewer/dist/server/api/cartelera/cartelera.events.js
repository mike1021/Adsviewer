/**
 * Cartelera model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _cartelera = require('./cartelera.model');

var _cartelera2 = _interopRequireDefault(_cartelera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarteleraEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
CarteleraEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _cartelera2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    CarteleraEvents.emit(event + ':' + doc._id, doc);
    CarteleraEvents.emit(event, doc);
  };
}

exports.default = CarteleraEvents;
//# sourceMappingURL=cartelera.events.js.map
