import styles from "./Form.module.css";
import { Button } from "../button/Button";

export const Form = (props) => {
  const {
    isSelected,
    handleInputChange,
    handleInputChange2,
    handleInputChange3,
    value,
    value2,
    value3,
  } = props;
  return (
    <div className={styles.formContainer}>
      <div className={styles.labelContainer}>
        <h2 className={styles.billTitle}>Bill</h2>
        {value < 1 ? <h2 className={styles.error}>Can’t be zero</h2> : null}
      </div>
      <input
        type="number"
        onChange={handleInputChange}
        className={styles.bill}
        value={value}
        placeholder="0"
      />

      <Button value3={value3} handleInputChange3={handleInputChange3} />
      <div className={styles.labelContainer}>
        <h2 className={styles.NumPeople}>Number of People</h2>
        {value2 < 1 ? <h2 className={styles.error}>Can’t be zero</h2> : null}
      </div>
      <input
        onChange={handleInputChange2}
        type="number"
        value={value2}
        className={styles.inputNumPeople}
        placeholder="0"
      />
    </div>
  );
};
