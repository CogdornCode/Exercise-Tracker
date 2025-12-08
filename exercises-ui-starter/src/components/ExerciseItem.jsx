import { useNavigate } from 'react-router-dom';

function ExerciseItem({ exercise, setExercises }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const res = await fetch(`/api/exercises/${exercise._id}`, { method: 'DELETE' });
    if (res.ok) {
      setExercises(prev => prev.filter(e => e._id !== exercise._id));
    } else {
      alert('Failed to delete exercise');
    }
  };

  return (
    <div className="collection-item">
      <h3>{exercise.name}</h3>
      <p>{exercise.reps}, {exercise.weight}, {exercise.unit}, {exercise.date?.split('T')[0]}</p>
      <p>
        <button onClick={() => navigate(`/edit-exercise/${exercise._id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </p>
    </div>
  );
}

export default ExerciseItem;
