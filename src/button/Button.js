import styles from "./Button.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const buttons = [
  { id: 5, value: 5 },
  { id: 10, value: 10 },
  { id: 15, value: 15 },
  { id: 25, value: 25 },
  { id: 50, value: 50 },
];

export const Button = (props) => {
  const { setAmount, setTotal, amount, total, valueBill, valuePeople } = props;
  const min2 = "";
  const max2 = 100;
  const [valuePercent, setValuePercent] = useState("");
  const [btnColor, setBtnColor] = useState(false);
  const [borderColor3, setBorderColor3] = useState(false);
  const [rate, setRate] = useState(false);
  const [btnPercent, setBtnPercent] = useState("");

  const handleInputChange3 = (event) => {
    const valuePercent = Math.max(
      min2,
      Math.min(max2, Number(event.target.value))
    );
    setValuePercent(valuePercent);
    setBorderColor3(true);
  };
  function handleSubmit(btn) {
    setRate(true);
    setBtnColor(btn.id);
    setBorderColor3(true);
    setBtnPercent(btn.id);
    console.log();
  }

  setAmount(
    ((valueBill / valuePeople) * btnPercent) / 100 ||
      ((valueBill / valuePeople) * valuePercent) / 100
  );
  setTotal(valueBill / valuePeople + amount);

  return (
    <div>
      <div className={styles.labelContainer}>
        <h2 className={styles.selectTip}>Select Tip %</h2>
        {rate || valuePercent > 1 ? null : (
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
          value={valuePercent}
          onChange={handleInputChange3}
        />
      </div>
    </div>
  );
};
