'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vue-todo', function (err) {
  if (err) {
    console.error('Failed connecting to mongodb');
  } else {
    console.log('Succecssfully connected to database');
  }
});
