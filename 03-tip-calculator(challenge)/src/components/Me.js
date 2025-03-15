export default function Me({ myReview, onSelect }) {
  return (
    <div>
      <span className="label">How did you like the service ?</span>
      <select
        className="select-field"
        value={myReview}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">Satisfied(5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}
