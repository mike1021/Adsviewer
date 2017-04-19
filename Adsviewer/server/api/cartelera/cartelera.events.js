/**
 * Cartelera model events
 */

'use strict';

import {EventEmitter} from 'events';
import Cartelera from './cartelera.model';
var CarteleraEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CarteleraEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Cartelera.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CarteleraEvents.emit(event + ':' + doc._id, doc);
    CarteleraEvents.emit(event, doc);
  };
}

export default CarteleraEvents;
