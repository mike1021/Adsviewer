'use strict';

import mongoose from 'mongoose';

var DeporteSchema = new mongoose.Schema({
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

export default mongoose.model('Deporte', DeporteSchema);
