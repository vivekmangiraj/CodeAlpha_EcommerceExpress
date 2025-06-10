// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product  = require('./models/Product');

const products = [
  {
    name:        'Wireless Headphones',
    description: 'High‑fidelity over‑ear headphones with noise cancellation.',
    price:       99.99,
    image:       'headphones.jpg'
  },
  {
    name:        'Smart Watch',
    description: 'Track your fitness, receive notifications, and control your music.',
    price:       149.99,
    image:       'smartwatch.jpg'
  },
  {
    name:        'Gaming Mouse',
    description: 'Ergonomic mouse with 16,000 DPI sensor and customizable buttons.',
    price:       49.99,
    image:       'mouse.jpg'
  },
  {
    name:        'Mechanical Keyboard',
    description: 'RGB backlit keyboard with tactile switches and wrist rest.',
    price:       89.99,
    image:       'keyboard.jpg'
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Remove any existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert our sample products
    await Product.insertMany(products);
    console.log('Seeded products successfully');

    mongoose.disconnect();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
