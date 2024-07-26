import { useState } from "react";
import Steps from "./Steps";
import DaysCounter from "./DaysCounter";
import Accordian from "./Accordian";
import TipCalculator from "./TipCalculator";

function App() {
  return (
    <>
      <Steps />
      <DaysCounter />
      <Accordian />
      <TipCalculator />
    </>
  );
}

export default App;
