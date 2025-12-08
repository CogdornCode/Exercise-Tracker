import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true, min: 0 },
  weight: { type: Number, required: true, min: 0 },
  unit: { type: String, enum: ['lbs', 'kgs', 'miles'], required: true },
  date: { type: Date, default: Date.now }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
export default Exercise;
