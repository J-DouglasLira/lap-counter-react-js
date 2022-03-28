import React, { useState, useEffect } from "react";
import AverageTime from "./components/AverageTime";
import Button from "./components/Button";
import NumberOfLaps from "./components/NumberOfLaps";
import "./styles/Global.scss"



function App() {
  const [lapsNumber, setLapsNumber] = useState(0);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTime((old) => old + 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  function increment() {
    setLapsNumber(lapsNumber + 1);
  }

  function decrement() {
    setLapsNumber(lapsNumber - 1);
  }
  const reset = () =>{
    setLapsNumber(0);
    setTime(0);
  }
  return (
    <div>  
      <NumberOfLaps lapsNumber={lapsNumber} />
      <Button text="+" onClick={increment} />
      <Button text="-" onClick={decrement} />
      {
        lapsNumber > 0 && 
        <AverageTime time={Math.round(time/lapsNumber)} />
      }
      <Button text="Start" onClick={toggleRunning} />
      <Button text="Restart" onClick = {reset}/>
    </div>
  );
}

export default App;
