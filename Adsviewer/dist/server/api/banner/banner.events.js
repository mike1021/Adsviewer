/**
 * Banner model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _banner = require('./banner.model');

var _banner2 = _interopRequireDefault(_banner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BannerEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
BannerEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _banner2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    BannerEvents.emit(event + ':' + doc._id, doc);
    BannerEvents.emit(event, doc);
  };
}

exports.default = BannerEvents;
//# sourceMappingURL=banner.events.js.map
