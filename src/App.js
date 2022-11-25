import "./App.css";
import icon from "./assets/logo.svg";
import { Card } from "./card/Card";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  function resultPerson() {
    setAmount("j");
  }
  return (
    <div className="App">
      <img src={icon} className="icon" />
      <Card amount={amount} total={total} />
    </div>
  );
}

export default App;
