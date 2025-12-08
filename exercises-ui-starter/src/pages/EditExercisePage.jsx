import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UnitSelector from '../components/UnitSelector';

export const EditExercisePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState('lbs');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchExercise = async () => {
      const res = await fetch(`/exercises/${id}`);
      if (res.ok) {
        const data = await res.json();
        setName(data.name);
        setReps(data.reps);
        setWeight(data.weight);
        setUnit(data.unit);
        setDate(data.date?.split('T')[0]);
      } else {
        alert('Exercise not found');
        navigate('/');
      }
    };
    fetchExercise();
  }, [id, navigate]);

  const updateExercise = async () => {
    const updated = { name, reps, weight, unit, date };
    const res = await fetch(`/exercises/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });

    if (res.status === 200) {
      alert('Exercise updated successfully!');
      navigate('/');
    } else {
      const data = await res.json();
      alert('Failed to update exercise: ' + (data?.Error || 'Unknown error'));
    }
  };

  return (
    <div>
      <h1>Edit Exercise</h1>
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
      <button onClick={updateExercise}>Update</button>
    </div>
  );
};

export default EditExercisePage;
