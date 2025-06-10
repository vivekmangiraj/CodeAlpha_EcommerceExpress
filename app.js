require('dotenv').config();
const express       = require('express');
const mongoose      = require('mongoose');
const session       = require('express-session');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash         = require('connect-flash');
const csurf         = require('csurf');
const ejsLayouts    = require('express-ejs-layouts');

const User   = require('./models/User');
const Cart   = require('./models/Cart');

const app = express();

// view engine + layouts
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.set('layout', 'layout');

// static & body parser
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// sessions, flash, csrf
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(flash());
app.use(csurf());

// passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

// expose to all templates
app.use(async (req, res, next) => {
  res.locals.user      = req.user || null;
  res.locals.title     = 'My Shop';
  res.locals.csrfToken = req.csrfToken();
  res.locals.message   = req.flash('message');
  // cart count badge
  res.locals.cartCount = req.user
    ? await Cart.countDocuments({ user: req.user._id })
    : 0;
  next();
});

// your routers…
app.use('/',     require('./routes/productRoutes'));
app.use('/auth', require('./routes/authRoutes'));
app.use('/cart', require('./routes/cartRoutes'));

// error handler…
app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') return res.status(403).send('Form tampered with');
  console.error(err);
  res.status(500).send('Internal Server Error');
});

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log('DB is up'))
  .catch(console.error);

app.listen(process.env.PORT||3000, ()=>console.log(`Server is running at: http://localhost:${process.env.PORT}`));
