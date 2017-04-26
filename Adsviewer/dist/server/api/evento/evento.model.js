'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventoSchema = new _mongoose2.default.Schema({
  name: String,
  descripcion: String,
  imagen: String,
  dataid: String,
  postdate: String,
  detalles: String,
  active: Boolean
});

exports.default = _mongoose2.default.model('Evento', EventoSchema);
//# sourceMappingURL=evento.model.js.map
