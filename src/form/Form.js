import styles from "./Form.module.css";
import { Button } from "../button/Button";

export const Form = (props) => {
  const {
    handleInputChange,
    handleInputChange2,
    handleInputChange3,
    value,
    value2,
    value3,
    rate,
    setRate,
    handlePercent,
    btnColor,
    setBtnColor,
    borderColor,
    setBorderColor,
    setBorderColor2,
    borderColor2,
    setBorderColor3,
    borderColor3,
    amount,
    setAmount,
    total,
    setTotal,
  } = props;
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
        borderColor={borderColor}
        setBorderColor={setBorderColor}
      />

      <Button
        value3={value3}
        handleInputChange3={handleInputChange3}
        rate={rate}
        setRate={setRate}
        handlePercent={handlePercent}
        btnColor={btnColor}
        setBtnColor={setBtnColor}
        borderColor3={borderColor3}
        setBorderColor3={setBorderColor3}
        amount={amount}
        setAmount={setAmount}
        total={total}
        setTotal={setTotal}
      />
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
        borderColor={borderColor}
        setBorderColor={setBorderColor}
        borderColor2={borderColor2}
        setBorderColor2={setBorderColor2}
        amount={amount}
        setAmount={setAmount}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
};
