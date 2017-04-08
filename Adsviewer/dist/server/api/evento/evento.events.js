/**
 * Evento model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _evento = require('./evento.model');

var _evento2 = _interopRequireDefault(_evento);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventoEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
EventoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _evento2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    EventoEvents.emit(event + ':' + doc._id, doc);
    EventoEvents.emit(event, doc);
  };
}

exports.default = EventoEvents;
//# sourceMappingURL=evento.events.js.map
