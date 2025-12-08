import ExerciseItem from './ExerciseItem';

function ExerciseCollection({ exercises, setExercises }) {
  return (
    <div className="collection-container">
      {exercises.map(exercise => (
        <ExerciseItem 
          key={exercise._id} 
          exercise={exercise} 
          setExercises={setExercises} 
        />
      ))}
    </div>
  );
}

export default ExerciseCollection;
