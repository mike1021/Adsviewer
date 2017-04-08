/**
 * Deporte model events
 */

'use strict';

import {EventEmitter} from 'events';
import Deporte from './deporte.model';
var DeporteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DeporteEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Deporte.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DeporteEvents.emit(event + ':' + doc._id, doc);
    DeporteEvents.emit(event, doc);
  }
}

export default DeporteEvents;
