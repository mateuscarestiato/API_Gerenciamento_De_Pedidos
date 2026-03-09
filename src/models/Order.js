const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  price: Number
});

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  value: Number,
  creationDate: { type: Date, default: Date.now },
  items: [ItemSchema]
}, { versionKey: '__v' });

module.exports = mongoose.model('Order', OrderSchema);