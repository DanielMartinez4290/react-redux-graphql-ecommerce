var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var guitarSchema = new Schema({
  name: String,
  image: String,
  price: String, 
  category: String
});

module.exports = mongoose.model('Guitar', guitarSchema);