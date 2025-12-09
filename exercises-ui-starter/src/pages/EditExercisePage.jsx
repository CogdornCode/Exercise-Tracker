import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navigation';

export default function EditExercise({ exercises }) {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    reps: '',
    weight: '',
    unit: '',
    date: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercise = async () => {
      let exerciseToEdit = exercises?.find(e => e._id === id);

      // If not found locally, fetch from backend
      if (!exerciseToEdit) {
        const res = await fetch(`/exercises/${id}`);
        if (res.ok) {
          exerciseToEdit = await res.json();
        } else {
          alert('Exercise not found');
          navigate('/');
          return;
        }
      }

      setFormData({
        name: exerciseToEdit.name,
        reps: exerciseToEdit.reps,
        weight: exerciseToEdit.weight,
        unit: exerciseToEdit.unit,
        date: exerciseToEdit.date?.split('T')[0],
      });
      setLoading(false);
    };

    fetchExercise();
  }, [id, exercises, navigate]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`/exercises/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Exercise updated successfully!');
      navigate('/');
    } else {
      alert('Failed to update exercise');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Chris' Exercise Log!</h1>
      <Navbar />
      <h2>Edit Exercise</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name: <input name="name" value={formData.name} onChange={handleChange} /></label>
        </p>
        <p>
          <label>Reps: <input type="number" name="reps" value={formData.reps} onChange={handleChange} /></label>
        </p>
        <p>
          <label>Weight: <input type="number" name="weight" value={formData.weight} onChange={handleChange} /></label>
        </p>
        <p>
          <label>
            Unit:
            <select name="unit" value={formData.unit} onChange={handleChange}>
              <option value="kgs">kgs</option>
              <option value="lbs">lbs</option>
              <option value="miles">miles</option>
            </select>
          </label>
        </p>
        <p>
          <label>Date: <input type="date" name="date" value={formData.date} onChange={handleChange} /></label>
        </p>
        <button type="submit">Update Exercise</button>
      </form>
    </div>
  );
}
