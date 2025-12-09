import { useNavigate } from 'react-router-dom';

export default function ExerciseRow({ exercise, setExercises }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const res = await fetch(`/exercises/${exercise._id}`, { method: 'DELETE' });
    if (res.ok) {
      // Remove the deleted exercise from state
      setExercises(prev => prev.filter(e => e._id !== exercise._id));
      alert('Exercise deleted successfully!');
    } else {
      alert('Failed to delete exercise');
    }
  };

  return (
    <tr>
      <td className="exercise-header">{exercise.name}</td>
      <td className="exercise-header">{exercise.reps}</td>
      <td className="exercise-header">{exercise.weight}</td>
      <td className="exercise-header">{exercise.unit}</td>
      <td className="exercise-header">{exercise.date?.split('T')[0]}</td>
      <td className="exercise-header">
        <button onClick={() => navigate(`/edit-exercise/${exercise._id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}
