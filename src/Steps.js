import { useState } from "react";
import "./index.css";

const steps = [
  "Learn React in 3 months!",
  "Try to secure an Internship",
  "Get a Job! and Life starts.",
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
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
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {steps[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{
                backgroundColor: step === 1 ? "gray" : "orangered",
                color: "#ffffff",
              }}
              onClick={handlePrev}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: step === 3 ? "gray" : "orangered",
                color: "#ffffff",
              }}
              onClick={handleNext}
              disabled={step === 3}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;
