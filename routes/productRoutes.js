const express = require('express');
const router  = express.Router();
const Product = require('../models/Product');

// GET / → product listing
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.render('index', {
      title: 'All Products',
      products
    });
  } catch (err) {
    next(err);
  }
});

// GET /product/:id → detail page
router.get('/product/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('product-detail', {
      title: product.name,
      product
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
