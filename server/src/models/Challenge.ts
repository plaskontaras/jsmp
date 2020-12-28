import mongoose, { Schema, Document } from 'mongoose';

export interface Challengenterface extends Document {
  challengeId: number;
  challengeState: string;
  startDate: Date;
  tasksOrder: { id: number; description: string }[];
  tasksStatus: Record<string, unknown>;
  achievementsStatus: Record<string, unknown>;
  owner: Schema.Types.ObjectId;
}

const ChallengeSchema: Schema = new Schema({
  challengeId: { type: Number, required: true },
  challengeState: { type: String, required: true },
  startDate: { type: Date, default: Date.now, required: true },
  tasksOrder: [{ id: Number, description: String }],
  tasksStatus: { type: Object },
  achievementsStatus: { type: Object },
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Challenge = mongoose.model<Challengenterface>(
  'Challenge',
  ChallengeSchema
);

export default Challenge;
