'use strict';

import mongoose from 'mongoose';

var EventoSchema = new mongoose.Schema({
  name: String,
  descripcion: String,
  imagen: String,
  dataid: String,
  postdate: String,
  detalles: String,
  active: Boolean
});

export default mongoose.model('Evento', EventoSchema);
