export default function ExerciseRow({ exercise }) {
  return (
    <tr>
      <td className="border px-2 py-1">{exercise.name}</td>
      <td className="border px-2 py-1">{exercise.reps}</td>
      <td className="border px-2 py-1">{exercise.weight}</td>
      <td className="border px-2 py-1">{exercise.unit}</td>
      <td className="border px-2 py-1">{exercise.date?.split('T')[0]}</td>
    </tr>
  );
}
