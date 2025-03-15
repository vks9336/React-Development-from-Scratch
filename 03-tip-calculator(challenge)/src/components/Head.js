export default function Head({ bill, onSetBill }) {
  return (
    <div className="label" onChange={onSetBill}>
      <span>How much was the bill ?</span>
      <input
        className="input-field"
        type="text"
        placeholder="Enter you bill amount here"
        value={bill}
      />
    </div>
  );
}
