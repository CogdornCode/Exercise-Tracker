import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';

export default function HomePage() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const res = await fetch('/exercises');
      if (res.ok) {
        setExercises(await res.json());
      }
    };
    fetchExercises();
  }, []);

  return (
    <div>
      <h2>List of Exercises</h2>
      <ExerciseTable exercises={exercises} />
      <Link to="/add-exercise">Add a new exercise</Link>
    </div>
  );
}
