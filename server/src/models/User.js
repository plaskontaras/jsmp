const Challenge = require('./Challenge');

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Types } = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
  // challenge: { type: Types.ObjectId, ref: Challenge }
});

User.pre('save', async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

User.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

const UserModel = mongoose.model('User', User);

module.exports = UserModel;
