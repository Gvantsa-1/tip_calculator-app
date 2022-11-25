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
  const {
    value3,
    handleInputChange3,
    rate,
    setRate,
    btnColor,
    setBtnColor,
    borderColor,
    setBorderColor,
    setBorderColor3,
    borderColor3,
    resultPerson,
    resultTotal,
    amount,
    setAmount,
    total,
    setTotal,
  } = props;
  function handleSubmit(btn) {
    setRate(btn.value);
    setBtnColor(btn.id);
    setBorderColor3(true);
  }

  console.log(rate);
  console.log(btnColor);
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
              rate={rate}
              setrate={setRate}
              btnColor={btnColor}
              setBtnColor={setBtnColor}
              borderColor={borderColor}
              setBorderColor={setBorderColor}
              resultPerson={resultPerson}
              resultTotal={resultTotal}
              amount={amount}
              setAmount={setAmount}
              total={total}
              setTotal={setTotal}
            >
              %{btn.value}
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
          borderColor={borderColor}
          setBorderColor={setBorderColor}
          borderColor3={borderColor3}
          setBorderColor3={setBorderColor3}
          resultPerson={resultPerson}
          resultTotal={resultTotal}
          amount={amount}
          setAmount={setAmount}
          total={total}
          setTotal={setTotal}
        />
      </div>
    </div>
  );
};
