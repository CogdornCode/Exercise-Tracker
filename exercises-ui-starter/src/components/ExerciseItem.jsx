import { useNavigate } from 'react-router-dom';
import ExerciseRow from "./ExerciseRow";


function ExerciseItem({ exercise, setExercises }) {
  const navigate = useNavigate();

  return (
    <div className="collection-item">
      <h3>{exercise.name}</h3>
      <p>{exercise.reps}, {exercise.weight}, {exercise.unit}, {exercise.date?.split('T')[0]}{' '}
        <button onClick={() => navigate(`/edit-exercise/${exercise._id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </p>
    </div>
  );
}

export default ExerciseItem;
