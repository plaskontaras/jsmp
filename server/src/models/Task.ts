const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  id: Number,
  description: String
});

export const Task = model('Task', taskSchema);
// module.exports = model('Task', tschema);
