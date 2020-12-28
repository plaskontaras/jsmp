import mongoose, { Schema, Document } from 'mongoose';

export interface TaskInterface extends Document {
  id: number;
  description: string;
}

const TaskSchema: Schema = new Schema({
  id: Number,
  description: String
});

const Task = mongoose.model<TaskInterface>('Task', TaskSchema);
export default Task;
