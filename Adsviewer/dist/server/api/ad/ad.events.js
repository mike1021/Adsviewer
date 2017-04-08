/**
 * Ad model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _ad = require('./ad.model');

var _ad2 = _interopRequireDefault(_ad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
AdEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _ad2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    AdEvents.emit(event + ':' + doc._id, doc);
    AdEvents.emit(event, doc);
  };
}

exports.default = AdEvents;
//# sourceMappingURL=ad.events.js.map
