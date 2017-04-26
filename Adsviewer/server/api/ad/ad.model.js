'use strict';

import mongoose from 'mongoose';

var AdSchema = new mongoose.Schema({
  name: String,
  imagen: String,
  descripcion: String,
  bannerprincipal: String,
  banneraabajo: String,
  ubicacion: String,
  idbanner: String 
});

export default mongoose.model('Ad', AdSchema);
