/**
 * Cotizacion model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerEvents = undefined;

var _events = require('events');

var CotizacionEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
CotizacionEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Cotizacion) {
  for (var e in events) {
    var event = events[e];
    Cotizacion.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function (doc) {
    CotizacionEvents.emit(event + ':' + doc._id, doc);
    CotizacionEvents.emit(event, doc);
  };
}

exports.registerEvents = registerEvents;
exports.default = CotizacionEvents;
//# sourceMappingURL=cotizacion.events.js.map
