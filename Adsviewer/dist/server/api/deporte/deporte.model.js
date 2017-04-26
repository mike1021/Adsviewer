'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeporteSchema = new _mongoose2.default.Schema({
   jugador1: String,
   jugador2: String,
   marcador1: Number,
   marcador2: Number,
   logo1: String,
   logo2: String,
   lugar: String,
   fecha: String,
   status: String,
   temporada: String,
   liga: String,
   deporte: String,
   active: Boolean
});

exports.default = _mongoose2.default.model('Deporte', DeporteSchema);
//# sourceMappingURL=deporte.model.js.map
