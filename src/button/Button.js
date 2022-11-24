import styles from "./Button.module.css";
import { v4 as uuidv4 } from "uuid";

const buttons = [
  { id: 1, value: 5 },
  { id: 2, value: 10 },
  { id: 3, value: 15 },
  { id: 4, value: 25 },
  { id: 5, value: 50 },
];

export const Button = (props) => {
  const { value3, handleInputChange3 } = props;
  return (
    <div>
      <div className={styles.labelContainer}>
        <h2 className={styles.selectTip}>Select Tip %</h2>
        {value3 < 1 ? <h2 className={styles.error}>Can’t be zero</h2> : null}
      </div>

      <div className={styles.btnContainer}>
        {buttons.map((btn) => {
          return (
            <button key={uuidv4()} className={styles.tipAmount}>
              {btn.value}%
            </button>
          );
        })}

        <input
          className={styles.tipCustom}
          type="number"
          placeholder="Custom"
          value={value3}
          onChange={handleInputChange3}
        />
      </div>
    </div>
  );
};
