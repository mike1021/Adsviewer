'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './cotizacion.events';

var CotizacionSchema = new mongoose.Schema({
  orderID: String,
  name: String,
  email: String,
  info: String,
  active: Boolean,
  total: Number,
  subTotal: Number,
  iva: Number,
  cotizacionDate: {type: Date, default: Date.now},
  updated: {type: Date},
  uid: String,
  product: {sku: String, name: String, cantidad: Number, precio: Number}
});

registerEvents(CotizacionSchema);
export default mongoose.model('Cotizacion', CotizacionSchema);
