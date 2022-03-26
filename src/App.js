import React from "react";
import AverageTime from "./components/AverageTime";
import Button from "./components/Button";
import NumberOfLaps from "./components/NumberOfLaps";



function App() {
  return (
    <div>
      <NumberOfLaps number="20" />
      <Button text="+" />
      <Button text="-" />
      <AverageTime time="01:30" />
      <Button text="Iniciar" />
      <Button text="Reiniciar" />
    </div>
  );
}

export default App;
