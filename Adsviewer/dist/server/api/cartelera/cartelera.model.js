'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarteleraSchema = new _mongoose2.default.Schema({
  name: String,
  imagen: String,
  descripcion: String,
  active: Boolean
});

exports.default = _mongoose2.default.model('Cartelera', CarteleraSchema);
//# sourceMappingURL=cartelera.model.js.map
