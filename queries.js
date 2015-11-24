var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Dinosaur = require('./models/dinosaur');

var callback = function(err, data) {
  if (err) return err;
  console.log(data);
};

// This function
Dinosaur.find().exec(callback);
// Does the same thing as this function
Dinosaur.find(callback);
// But .exec() can be useful