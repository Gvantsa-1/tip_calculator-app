import styles from "./Button.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const buttons = [
  { id: 1, value: 5 },
  { id: 2, value: 10 },
  { id: 3, value: 15 },
  { id: 4, value: 25 },
  { id: 5, value: 50 },
];

export const Button = (props) => {
  const min2 = "";
  const max2 = 100;
  const [value3, setValue3] = useState("");
  const [btnColor, setBtnColor] = useState(false);
  const [borderColor3, setBorderColor3] = useState(false);
  const [rate, setRate] = useState(false);

  const handleInputChange3 = (event) => {
    const value3 = Math.max(min2, Math.min(max2, Number(event.target.value)));
    setValue3(value3);
    setBorderColor3(true);
  };

  const { amount, total } = props;
  function handleSubmit(btn) {
    setRate(true);
    setBtnColor(btn.id);
    setBorderColor3(true);
  }
  return (
    <div>
      <div className={styles.labelContainer}>
        <h2 className={styles.selectTip}>Select Tip %</h2>
        {rate || value3 > 1 ? null : (
          <h2 className={styles.error}>Can’t be zero</h2>
        )}
      </div>
      <div className={styles.btnContainer}>
        {buttons.map((btn) => {
          return (
            <button
              style={{
                backgroundColor: btnColor === btn.id ? "var(--cyan)" : null,
                color: btnColor === btn.id ? "var(--very_dark_cyan)" : null,
              }}
              type="submit"
              onClick={() => handleSubmit(btn)}
              key={uuidv4()}
              value={btn}
              className={styles.tipAmount}
              amount={amount}
              total={total}
            >
              {btn.value}%
            </button>
          );
        })}

        <input
          style={{
            border:
              borderColor3 === true
                ? "2px solid  var(--cyan)"
                : "2px solid  var(--red_border)",
          }}
          className={styles.tipCustom}
          type="number"
          placeholder="Custom"
          value={value3}
          onChange={handleInputChange3}
          amount={amount}
          total={total}
        />
      </div>
    </div>
  );
};
