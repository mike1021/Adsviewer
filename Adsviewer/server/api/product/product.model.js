'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './product.events';

var ProductSchema = new mongoose.Schema({
  sku: String,
  name: String,
  nameLower: String,
  slug: String,
  status: String,
  info: String,
  uid: String,
  price : Number,
  image: String,
  active: { type: Boolean, default: true },
  updated: {type: Date, default: Date.now}
}, { versionKey: false });

registerEvents(ProductSchema);
export default mongoose.model('Product', ProductSchema);
