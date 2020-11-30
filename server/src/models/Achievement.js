const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: Number,
  description: String,
  image: String
});

module.exports = model('Achievement', schema);
