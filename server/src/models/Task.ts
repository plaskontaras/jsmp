const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: Number,
  description: String
});

module.exports = model('Task', schema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const taskSchema = Schema({
//     id: Number,
//     description: String
// })

// const Task = mongoose.model('Task', taskSchema, 'tasks');
// export default Task;

// import { model, Types, Schema } from 'mongoose';
// import User from './User';
// import { TaskDocument } from '../core/interfaces/task.interface';

// const TaskSchema = new Schema({
//   description: String,
//   user: { type: Types.ObjectId, ref: User },
// });

// TaskSchema.virtual('id').get(function(){
//   return this._id.toHexString();
// });

// export default model<TaskDocument>('Task', TaskSchema);
