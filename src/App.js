import "./App.css";
import icon from "./assets/logo.svg";
import { Card } from "./card/Card";
import { useState } from "react";

function App() {
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  function resultPerson() {
    setAmount("j");
  }

  function handlePercent() {
    if (rate !== 0) {
      setRate(true);
    }
  }

  return (
    <div className="App">
      <img src={icon} className="icon" />
      <Card rate={rate} amount={amount} total={total} />
    </div>
  );
}

export default App;
