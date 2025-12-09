import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';
import Navbar from '../components/Navigation';

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
      <h1>Chris' Exercise Log!</h1>
      <Navbar />
      <h2>List of Exercises</h2>
       <ExerciseTable exercises={exercises} setExercises={setExercises} />
    </div>
  );
}
