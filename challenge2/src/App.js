import { useState } from "react";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count + 1);

  function handleButton() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="main">
      <div className="box">
        <h2>Dynamic Counter</h2>
        <div className="step">
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <p className="text-animate"> {step}</p>
        </div>

        <div className="count">
          <button className="minus" onClick={() => setCount((c) => c - step)}>
            -
          </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button className="minus" onClick={() => setCount((c) => c + step)}>
            +
          </button>
        </div>
        <div>
          <p className="data-text">
            {count === 0
              ? "Today is "
              : count >= 0
              ? `${Math.abs(count)} ${
                  count === 1 ? " day " : "days "
                } from today is `
              : `${Math.abs(count)} ${
                  count === -1 ? " day " : "days "
                } ago was `}
            {date.toDateString()}
          </p>
        </div>
        <button className="reset" onClick={handleButton}>
          Reset
        </button>
      </div>
    </div>
  );
}
