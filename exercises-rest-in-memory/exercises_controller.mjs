import express from 'express';
import 'dotenv/config';
import * as model from './exercises_model.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple validation function
function isValidExercise(data) {
  const { name, reps, weight, unit, date } = data;
  if (!name || typeof name !== 'string') return false;
  if (!Number.isInteger(reps) || reps <= 0) return false;
  if (!Number.isInteger(weight) || weight < 0) return false;
  if (!['kgs', 'lbs', 'miles'].includes(unit)) return false;
  if (date && isNaN(Date.parse(date))) return false;
  return true;
}

// POST /exercises
app.post('/exercises', async (req, res) => {
  try {
    if (!isValidExercise(req.body)) {
      return res.status(400).json({ Error: 'Invalid request' });
    }
    const exercise = await model.createExercise(req.body);
    res.status(201).json(exercise);
  } catch (err) {
    console.error('POST error:', err);
    res.status(500).json({ Error: 'Server error' });
  }
});

// GET /exercises
app.get('/exercises', async (req, res) => {
  try {
    const exercises = await model.findExercises();
    res.json(exercises);
  } catch (err) {
    console.error('GET all error:', err);
    res.status(500).json({ Error: 'Server error' });
  }
});

// GET /exercises/:_id
app.get('/exercises/:_id', async (req, res) => {
  try {
    const exercise = await model.findExerciseById(req.params._id);
    if (!exercise) return res.status(404).json({ Error: 'Not found' });
    res.json(exercise);
  } catch (err) {
    console.error('GET one error:', err);
    res.status(500).json({ Error: 'Server error' });
  }
});

// PUT /exercises/:_id
app.put('/exercises/:_id', async (req, res) => {
  try {
    if (!isValidExercise(req.body)) {
      return res.status(400).json({ Error: 'Invalid request' });
    }
    const updated = await model.updateExercise(req.params._id, req.body);
    if (!updated) return res.status(404).json({ Error: 'Not found' });
    res.json(updated);
  } catch (err) {
    console.error('PUT error:', err);
    res.status(500).json({ Error: 'Server error' });
  }
});

// DELETE /exercises/:_id
app.delete('/exercises/:_id', async (req, res) => {
  try {
    const deleted = await model.deleteExercise(req.params._id);
    if (!deleted) return res.status(404).json({ Error: 'Not found' });
    res.status(204).send();
  } catch (err) {
    console.error('DELETE error:', err);
    res.status(500).json({ Error: 'Server error' });
  }
});

// Start server after connecting to MongoDB
await model.connect();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
