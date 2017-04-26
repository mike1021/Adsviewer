'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BannerSchema = new _mongoose2.default.Schema({
  name: String,
  texttoprincipal: String,
  textosecundario: String,
  imagen1: String,
  imagen2: String,
  imagen3: String,
  imagen4: String,
  imagen5: String,
  clase: String,
  divname: String,
  linkpromo: String,
  active: { type: Boolean, default: false }
});

exports.default = _mongoose2.default.model('Banner', BannerSchema);
//# sourceMappingURL=banner.model.js.map
