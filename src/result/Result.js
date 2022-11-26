import styles from "./Result.module.css";
import { useState } from "react";

export const Result = (props) => {
  const [resetColor, setResetColor] = useState(false);
  const { amount, total } = props;
  const refreshPage = () => {
    window.location.reload();
    setResetColor(true);
  };

  return (
    <div className={styles.resultWrapper}>
      <div className={styles.tipResult}>
        <h3>Tip Amount</h3>
        <div className={styles.resultTip}>${amount.toFixed(2)}</div>
      </div>
      <div className={styles.totalResult}>
        <h3>Total</h3>
        <div className={styles.resultTotal}>${total.toFixed(2)}</div>
      </div>
      <button
        style={{ backgroundColor: resetColor === true ? "var(--cyan)" : null }}
        onClick={refreshPage}
        className={styles.reset}
      >
        RESET
      </button>
    </div>
  );
};
