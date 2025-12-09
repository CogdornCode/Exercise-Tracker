import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UnitSelector from '../components/UnitSelector';
import Navbar from '../components/Navigation';

export const AddExercisePage = () => {
  const [name, setName] = useState('');
  const [reps, setReps] = useState(1);
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState('lbs');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const res = await fetch('/exercises', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newExercise),
    });

    if (res.status === 201) {
      alert('Exercise added successfully!');
      navigate('/');
    } else {
      const data = await res.json();
      alert('Failed to add exercise: ' + (data?.Error || 'Unknown error'));
    }
  };

  return (
    <div>
      <h1>Chris' Exercise Log!</h1>
      <Navbar />
      <h2>Add Exercise</h2>
      <p>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Reps:
          <input type="number" min={1} value={reps} onChange={e => setReps(e.target.valueAsNumber)} />
        </label>
      </p>
      <p>
        <label>
          Weight/Distance:
          <input type="number" min={0} value={weight} onChange={e => setWeight(e.target.valueAsNumber)} />
        </label>
        <UnitSelector value={unit} onChange={setUnit} />
      </p>
      <p>
        <label>
          Date:
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </label>
      </p>
      <button onClick={addExercise}>Add</button>
    </div>
  );
};

export default AddExercisePage;
