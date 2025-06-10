const express = require('express');
const router  = express.Router();
const Cart    = require('../models/Cart');
const Product = require('../models/Product');

// ─── Require login for everything in this router ────────────────────
router.use((req, res, next) => {
  if (!req.isAuthenticated()) {
    // not logged in → redirect to login page
    return res.redirect('/auth/login');
  }
  next();
});

// POST /cart/add/:id
router.post('/add/:id', async (req, res, next) => {
  try {
    // Now we know req.user is defined
    const productId = req.params.id;
    const userId    = req.user._id;

    // Check product exists (optional but recommended)
    const product = await Product.findById(productId);
    if (!product) {
      req.flash('message', 'Product not found');
      return res.redirect('/');
    }

    let cartItem = await Cart.findOne({ product: productId, user: userId });
    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
    } else {
      await Cart.create({ product: productId, user: userId });
    }

    res.redirect('/cart');
  } catch (err) {
    next(err);
  }
});

// GET /cart
router.get('/', async (req, res, next) => {
  try {
    const cartItems = await Cart
      .find({ user: req.user._id })
      .populate('product');

    const total = cartItems.reduce(
      (sum, item) => sum + (item.product.price * item.quantity),
      0
    );

    res.render('cart', {
      title: 'Your Cart',
      cartItems,
      total
    });
  } catch (err) {
    next(err);
  }
});

// DELETE item entirely
router.post('/remove/:id', async (req, res, next) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.redirect('/cart');
    } catch (err) {
      next(err);
    }
  });
  

module.exports = router;
