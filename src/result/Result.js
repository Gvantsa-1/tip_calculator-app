import styles from "./Result.module.css";

export const Result = (props) => {
  return (
    <div className={styles.resultWrapper}>
      <div className={styles.tipResult}>
        <h3>Tip Amount</h3>
        <div className={styles.resultTip}>$</div>
      </div>
      <div className={styles.totalResult}>
        <h3>Total</h3>
        <div className={styles.resultTotal}>$</div>
      </div>
      <button className={styles.reset}>RESET</button>
    </div>
  );
};
