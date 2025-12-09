export default function UnitSelector({ value, onChange }) {
  return (
      <label>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="lbs">lbs</option>
          <option value="kgs">kgs</option>
          <option value="miles">miles</option>
        </select>
      </label>
  );
}