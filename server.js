//* =============================
//* Dependencies
//* =============================
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();
const compression = require('compression');

// Port
const PORT = process.env.PORT || 3000;

//* =============================
//* Database
//* =============================
// Require the models folder
const db = require('models');

// Connect to Mongoose db and logging port
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//* =============================
//* Middleware
//* =============================
app.use(compression());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//* =============================
//* Routes
//* =============================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

//* =============================
//* Server
//* =============================
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
