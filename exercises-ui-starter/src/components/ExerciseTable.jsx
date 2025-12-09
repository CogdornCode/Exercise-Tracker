import ExerciseRow from "./ExerciseRow";

export default function ExerciseTable({ exercises, setExercises }) {
  return (
    <table className="exercise-table">
      <thead>
        <tr>
          <th className="exercise-header">Name</th>
          <th className="exercise-header">Reps</th>
          <th className="exercise-header">Weight</th>
          <th className="exercise-header">Unit</th>
          <th className="exercise-header">Date</th>
          <th className="exercise-header">Actions</th>
        </tr>
      </thead>

      <tbody>
        {exercises.map((exercise) => (
          <ExerciseRow 
            key={exercise._id} 
            exercise={exercise} 
            setExercises={setExercises} 
          />
        ))}
      </tbody>
    </table>
  );
}
