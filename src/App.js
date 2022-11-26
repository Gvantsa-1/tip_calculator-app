import "./App.css";
import icon from "./assets/logo.svg";
import { Card } from "./card/Card";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <img src={icon} className="icon" />
      <Card
        setTotal={setTotal}
        amount={amount}
        total={total}
        setAmount={setAmount}
      />
    </div>
  );
}

export default App;
