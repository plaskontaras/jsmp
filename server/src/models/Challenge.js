const { Schema, model, Types } = require('mongoose');
const User = require('./User');
const Task = require('./Task');

const schema = new Schema({
  challengeId: { type: Number },
  challengeState: { type: String, required: true },
  startDate: { type: Date, default: Date.now, required: true },
  tasksOrder: [{ itemId: Number, description: String }],
  tasksStatus: { type: Object },
  achievementsStatus: { type: Object }
  // user: { type: Types.ObjectId, ref: User }
});

module.exports = model('Challenge', schema);
