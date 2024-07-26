import { useState } from "react";
import "./index.css";

function DaysCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleStepDown() {
    setStep((s) => s - 1);
  }

  function handleStepUp() {
    setStep((s) => s + 1);
  }

  function handleCountDown() {
    setCount((s) => s - step);
  }

  function handleCountUp() {
    setCount((s) => s + step);
  }

  const date = new Date("23 July 2024");
  date.setDate(date.getDate() + count);

  function resetCounter() {
    setStep((s) => 0);
    setCount((c) => 0);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="buttons">
            <button
              style={{
                backgroundColor: "orangered",
                color: "#ffffff",
              }}
              onClick={handleStepDown}
            >
              -
            </button>
            <p>Step : {step}</p>
            <button
              style={{
                backgroundColor: "orangered",
                color: "#ffffff",
              }}
              onClick={handleStepUp}
            >
              +
            </button>
          </div>
          <div className="buttons">
            <button
              style={{
                backgroundColor: "orangered",
                color: "#ffffff",
              }}
              onClick={handleCountDown}
            >
              -
            </button>
            <p>Count : {count}</p>
            <button
              style={{
                backgroundColor: "orangered",
                color: "#ffffff",
              }}
              onClick={handleCountUp}
            >
              +
            </button>
          </div>
          <p className="message">
            <span>
              {count === 0
                ? "Today is : "
                : count > 0
                ? `${count} Days from today is : `
                : `${Math.abs(count)} Days ago was : `}
            </span>
            <span>{date.toDateString()}</span>
          </p>
          <div className="buttons">
            <button
              style={{
                backgroundColor: "gray",
                color: "#ffffff",
              }}
              onClick={resetCounter}
            >
              Reset Counter
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DaysCounter;
