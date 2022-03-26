import React, { useState } from "react";
import AverageTime from "./components/AverageTime";
import Button from "./components/Button";
import NumberOfLaps from "./components/NumberOfLaps";

function App() {
  let [lapsNumber, setLapsNumber] = useState(20);

  function increment() {
    setLapsNumber(lapsNumber + 1);
  }

  function decrement() {
    setLapsNumber(lapsNumber - 1);
  }
  return (
    <div>
      <NumberOfLaps number={lapsNumber} />
      <Button text="+" onClick={increment} />
      <Button text="-" onClick={decrement} />
      <AverageTime time="01:30" />
      <Button text="Iniciar" />
      <Button text="Reiniciar" />
    </div>
  );
}

export default App;
