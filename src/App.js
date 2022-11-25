import "./App.css";
import icon from "./assets/logo.svg";
import { Card } from "./card/Card";
import { useState } from "react";

function App() {
  const min = "";
  const max = 999999;
  const min2 = "";
  const max2 = 100;
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [btnColor, setBtnColor] = useState(false);
  const [resetColor, setResetColor] = useState(false);
  const [borderColor, setBorderColor] = useState(false);
  const [borderColor2, setBorderColor2] = useState(false);
  const [borderColor3, setBorderColor3] = useState(false);
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  console.log(resultPerson);
  function resultTotal() {}
  const handleInputChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
    setBorderColor(true);
  };
  const handleInputChange2 = (event) => {
    const value2 = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue2(value2);
    setBorderColor2(true);
  };
  const handleInputChange3 = (event) => {
    const value3 = Math.max(min2, Math.min(max2, Number(event.target.value)));
    setValue3(value3);
    setBorderColor3(true);
  };
  function resultPerson() {}

  function handlePercent() {
    if (rate !== 0) {
      setRate(true);
    }
  }

  return (
    <div className="App">
      <img src={icon} className="icon" />
      <Card
        handleInputChange={handleInputChange}
        value={value}
        value2={value2}
        value3={value3}
        handleInputChange2={handleInputChange2}
        handleInputChange3={handleInputChange3}
        rate={rate}
        setRate={setRate}
        handlePercent={handlePercent}
        btnColor={btnColor}
        setBtnColor={setBtnColor}
        borderColor={borderColor}
        setBorderColor={setBorderColor}
        borderColor2={borderColor2}
        setBorderColor2={setBorderColor2}
        borderColor3={borderColor3}
        setBorderColor3={setBorderColor3}
        resetColor={resetColor}
        setResetColor={setResetColor}
        resultPerson={resultPerson}
        resultTotal={resultTotal}
        amount={amount}
        setAmount={setAmount}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
}

export default App;
