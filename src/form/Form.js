import styles from "./Form.module.css";
import { Button } from "../button/Button";

export const Form = (props) => {
  const { isSelected, handleInputChange, min, max, value, value2 } = props;
  return (
    <div className={styles.formContainer}>
      <div className={styles.labelContainer}>
        <h2 className={styles.billTitle}>Bill</h2>
        <h2 className={styles.error}>Can’t be zero</h2>
      </div>
      <input
        type="number"
        onChange={handleInputChange}
        className={styles.bill}
        value={value}
      />
      <div className={styles.labelContainer}>
        <h2 className={styles.selectTip}>Select Tip %</h2>
        <h2 className={styles.error}>Can’t be zero</h2>
      </div>
      <Button />
      <div className={styles.labelContainer}>
        <h2 className={styles.NumPeople}>Number of People</h2>
        <h2 className={styles.error}>Can’t be zero</h2>
      </div>
      <input
        onChange={handleInputChange}
        type="number"
        value={value2}
        className={styles.inputNumPeople}
      />
    </div>
  );
};
