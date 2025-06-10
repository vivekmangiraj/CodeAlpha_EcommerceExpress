const express  = require('express');
const router   = express.Router();
const passport = require('passport');
const User     = require('../models/User');

router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username });
    await User.register(user, password);
    req.login(user, err => {
      if (err) return next(err);
      res.redirect('/');
    });
  } catch (err) {
    req.flash('message', err.message);
    res.redirect('/auth/register');
  }
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/auth/login',
    failureFlash: 'Invalid username or password.'
  }),
  (req, res) => {
    res.redirect('/');
  }
);

router.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;
