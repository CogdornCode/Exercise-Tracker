import ExerciseRow from "./ExerciseRow";

export default function ExerciseTable({ exercises }) {
  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          <th className="border px-2 py-1">Name</th>
          <th className="border px-2 py-1">Reps</th>
          <th className="border px-2 py-1">Weight</th>
          <th className="border px-2 py-1">Unit</th>
          <th className="border px-2 py-1">Date</th>
        </tr>
      </thead>

      <tbody>
        {exercises.map((exercise) => (
          <ExerciseRow key={exercise._id} exercise={exercise} />
        ))}
      </tbody>
    </table>
  );
}