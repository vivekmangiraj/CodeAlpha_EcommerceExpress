const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
});

// virtual totalPrice if you need it in JSON
CartSchema.virtual('totalPrice').get(function() {
  return this.product.price * this.quantity;
});

module.exports = mongoose.model('Cart', CartSchema);
