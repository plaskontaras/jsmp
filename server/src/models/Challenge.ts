const { Schema, model, Types } = require('mongoose');
const User = require('./User');
import { Task } from './Task';
// const Task = require('./Task');

const challengeSchema = new Schema({
  challengeId: { type: Number, required: true },
  challengeState: { type: String, required: true },
  startDate: { type: Date, default: Date.now, required: true },
  tasksOrder: [{ itemId: Number, description: String }],
  tasksStatus: { type: Object },
  achievementsStatus: { type: Object },
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

export const Challenge = model('Challenge', challengeSchema);
