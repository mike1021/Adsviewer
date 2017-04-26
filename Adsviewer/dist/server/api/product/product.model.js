'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
  sku: String,
  name: String,
  nameLower: String,
  slug: String,
  status: String,
  info: String,
  uid: String,
  price: Number,
  image: String,
  active: { type: Boolean, default: true },
  updated: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Product', ProductSchema);
//# sourceMappingURL=product.model.js.map
