const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, required: true },
  duration: { type: Number, required: true }, // Duration in minutes
  calories: { type: Number }
});

module.exports = mongoose.model('Workout', workoutSchema);
