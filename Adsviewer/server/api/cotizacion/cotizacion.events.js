/**
 * Cotizacion model events
 */

'use strict';

import {EventEmitter} from 'events';
var CotizacionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CotizacionEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Cotizacion) {
  for(var e in events) {
    let event = events[e];
    Cotizacion.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    CotizacionEvents.emit(event + ':' + doc._id, doc);
    CotizacionEvents.emit(event, doc);
  };
}

export {registerEvents};
export default CotizacionEvents;
