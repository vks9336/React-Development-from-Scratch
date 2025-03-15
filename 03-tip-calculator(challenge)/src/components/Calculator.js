export default function Calculator({ bill, tip, onReset }) {
  const totalBill = bill + tip;

  return (
    <>
      <h3 className="tip-result">
        You pay ${totalBill}(${bill} + ${tip}tip)
      </h3>
      <button onClick={onReset}>Reset</button>
    </>
  );
}
