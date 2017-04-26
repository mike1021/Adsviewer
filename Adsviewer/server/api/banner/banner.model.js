'use strict';

import mongoose from 'mongoose';

var BannerSchema = new mongoose.Schema({
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
  active: {type:Boolean, default: false},
});

export default mongoose.model('Banner', BannerSchema);
