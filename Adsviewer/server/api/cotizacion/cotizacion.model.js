'use strict';

var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var CotizacionSchema = new Schema({
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

module.exports = mongoose.model('Cotizacion', CotizacionSchema);
