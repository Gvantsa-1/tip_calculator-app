import "./App.css";
import icon from "./assets/logo.svg";
import { Card } from "./card/Card";
import { useState } from "react";

function App() {
  const min = 1;
  const max = 999999;
  const min2 = 1;
  const max2 = 100;

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const handleInputChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
  };
  const handleInputChange2 = (event) => {
    const value2 = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue2(value2);
  };
  const handleInputChange3 = (event) => {
    const value3 = Math.max(min2, Math.min(max2, Number(event.target.value)));
    setValue3(value3);
  };
  const [isSelected, setIsSelected] = useState(false);
  function validate() {}
  return (
    <div className="App">
      <img src={icon} className="icon" />
      <Card
        isSelected={isSelected}
        handleInputChange={handleInputChange}
        value={value}
        value2={value2}
        value3={value3}
        handleInputChange2={handleInputChange2}
        handleInputChange3={handleInputChange3}
      />
    </div>
  );
}

export default App;
