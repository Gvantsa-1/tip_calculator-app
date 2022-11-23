import "./App.css";
import icon from "./assets/logo.svg";
import { Card } from "./card/Card";
import { useState } from "react";

function App() {
  const min = "1";
  const max = 9999999;

  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const handleInputChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
    const value2 = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue2(value2);
  };

  const [isSelected, setIsSelected] = useState(false);
  function validate() {}
  return (
    <div className="App">
      <img src={icon} className="icon" />
      <Card
        isSelected={isSelected}
        handleInputChange={handleInputChange}
        min={min}
        max={max}
        value={value}
        value2={value2}
      />
    </div>
  );
}

export default App;
