import mongoose from 'mongoose';
import 'dotenv/config';

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true, min: 1 },
  weight: { type: Number, required: true, min: 0 },
  unit: { type: String, enum: ['kgs', 'lbs', 'miles'], required: true },
  date: { type: Date, default: Date.now },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

// Connect to MongoDB
export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}

// Create a new exercise
export async function createExercise(data) {
  const exercise = new Exercise(data);
  return exercise.save();
}

// Get all exercises
export async function findExercises() {
  return Exercise.find();
}

// Get one exercise by ID
export async function findExerciseById(id) {
  return Exercise.findById(id);
}

// Update exercise by ID
export async function updateExercise(id, data) {
  return Exercise.findByIdAndUpdate(id, data, { new: true });
}

// Delete exercise by ID
export async function deleteExercise(id) {
  return Exercise.findByIdAndDelete(id);
}
