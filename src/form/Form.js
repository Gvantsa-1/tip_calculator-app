import styles from "./Form.module.css";
import { Button } from "../button/Button";
import { useState } from "react";

export const Form = (props) => {
  const min = "";
  const max = 999999;
  const [borderColor, setBorderColor] = useState(false);
  const [borderColor2, setBorderColor2] = useState(false);
  const [value2, setValue2] = useState("");
  const [value, setValue] = useState("");

  const handleInputChange2 = (event) => {
    const value2 = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue2(value2);
    setBorderColor2(true);
  };

  const handleInputChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
    setBorderColor(true);
  };

  const { rate, amount, total } = props;
  return (
    <div className={styles.formContainer}>
      <div className={styles.labelContainer}>
        <h2 className={styles.billTitle}>Bill</h2>

        {value < 1 ? <h2 className={styles.error}>Can’t be zero</h2> : null}
      </div>
      <input
        style={{
          border:
            borderColor === true
              ? "2px solid  var(--cyan)"
              : "2px solid  var(--red_border)",
        }}
        type="number"
        onChange={handleInputChange}
        className={styles.bill}
        value={value}
        placeholder="0"
      />

      <Button rate={rate} amount={amount} total={total} />
      <div className={styles.labelContainer}>
        <h2 className={styles.NumPeople}>Number of People</h2>
        {value2 < 1 ? <h2 className={styles.error}>Can’t be zero</h2> : null}
      </div>
      <input
        style={{
          border:
            borderColor2 === true
              ? "2px solid  var(--cyan)"
              : "2px solid  var(--red_border)",
        }}
        onChange={handleInputChange2}
        type="number"
        value={value2}
        className={styles.inputNumPeople}
        placeholder="0"
      />
    </div>
  );
};
