const { Schema, model } = require('mongoose');

export const achievementSchema = new Schema({
  id: Number,
  description: String,
  image: String
});

export const Achievement = model('Achievement', achievementSchema);
