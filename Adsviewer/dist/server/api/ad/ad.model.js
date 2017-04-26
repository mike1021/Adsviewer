'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdSchema = new _mongoose2.default.Schema({
  name: String,
  imagen: String,
  descripcion: String,
  bannerprincipal: String,
  banneraabajo: String,
  ubicacion: String,
  idbanner: String
});

exports.default = _mongoose2.default.model('Ad', AdSchema);
//# sourceMappingURL=ad.model.js.map
