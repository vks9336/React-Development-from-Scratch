import { useState } from "react";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepMinus() {
    step > 1 ? setStep(step - 1) : setStep(step);
  }

  function handleStepPlus() {
    setStep(step + 1);
  }

  function handleCountMinus() {
    setCount(count - step);
  }

  function handleCountPlus() {
    setCount(count + step);
  }

  return (
    <div className="main">
      <div className="box">
        <div className="step">
          <button className="minus" onClick={handleStepMinus}>
            -
          </button>
          <p>Step : {step}</p>
          <button className="plus" onClick={handleStepPlus}>
            +
          </button>
        </div>

        <div className="count">
          <button className="minus" onClick={handleCountMinus}>
            -
          </button>
          <p>Count : {count}</p>
          <button className="plus" onClick={handleCountPlus}>
            +
          </button>
        </div>
        <div>
          <p>
            {Math.abs(count)} days {count >= 0 ? "from today" : "ago"} is{" "}
            {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
