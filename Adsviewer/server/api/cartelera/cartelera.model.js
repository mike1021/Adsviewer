'use strict';

import mongoose from 'mongoose';

var CarteleraSchema = new mongoose.Schema({
  name: String,
  imagen: String,
  descripcion: String,
  active: Boolean
});

export default mongoose.model('Cartelera', CarteleraSchema);
