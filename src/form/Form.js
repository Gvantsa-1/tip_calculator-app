import styles from "./Form.module.css";
import { Button } from "../button/Button";
import { Suspense, useState } from "react";

export const Form = (props) => {
  const { amount, total, setAmount, setTotal } = props;
  const min = "";
  const max = 999999;
  const [borderColor, setBorderColor] = useState(false);
  const [borderColor2, setBorderColor2] = useState(false);
  const [valuePeople, setValuePeople] = useState("");
  const [valueBill, setValueBill] = useState("");

  const handleInputChange2 = (event) => {
    const valuePeople = Math.max(
      min,
      Math.min(max, Number(event.target.value))
    );
    setValuePeople(valuePeople);
    setBorderColor2(true);
  };
  const handleInputChange = (event) => {
    const valueBill = Math.max(min, Math.min(max, Number(event.target.value)));
    setValueBill(valueBill);
    setBorderColor(true);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.labelContainer}>
        <h2 className={styles.billTitle}>Bill</h2>

        {valueBill < 1 ? <h2 className={styles.error}>Can’t be zero</h2> : null}
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
        value={valueBill}
        placeholder="0"
      />

      <Button
        setTotal={setTotal}
        setAmount={setAmount}
        amount={amount}
        total={total}
        valueBill={valueBill}
        valuePeople={valuePeople}
      />
      <div className={styles.labelContainer}>
        <h2 className={styles.NumPeople}>Number of People</h2>
        {valuePeople < 1 ? (
          <h2 className={styles.error}>Can’t be zero</h2>
        ) : null}
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
        value={valuePeople}
        className={styles.inputNumPeople}
        placeholder="0"
      />
    </div>
  );
};
