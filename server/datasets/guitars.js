var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var guitarSchema = Schema({
  email: String,
  username: String,
  password: String,
  image: String,
  bio: String,
  following: [{userId: String}],
  followers: [{userId: String}],
  wastes : [{ type: Schema.Types.ObjectId, ref: 'Waste' }]
});

module.exports = mongoose.model('Guitar', guitarSchema);