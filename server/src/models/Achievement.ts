import mongoose, { Schema, Document } from 'mongoose';

export interface AchievementInterface extends Document {
  id: number;
  description: string;
  image: string;
}

const AchievementSchema: Schema = new Schema({
  id: Number,
  description: String,
  image: String
});

const Achievement = mongoose.model<AchievementInterface>(
  'Achievement',
  AchievementSchema
);

export default Achievement;
