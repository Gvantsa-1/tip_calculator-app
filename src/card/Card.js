import styles from "../card/Card.module.css";
import { Form } from "../form/Form";
import { Result } from "../result/Result";

export const Card = (props) => {
  const {
    isSelected,
    handleInputChange,
    value,
    value2,
    value3,
    handleInputChange2,
    handleInputChange3,
    rate,
    setRate,
    handlePercent,
    btnColor,
    setBtnColor,
    borderColor,
    setBorderColor,
    resetColor,
    setResetColor,
    borderColor2,
    setBorderColor2,
    borderColor3,
    setBorderColor3,
    resultperson,
    resultTotal,
    amount,
    setAmount,
    total,
    setTotal,
  } = props;
  return (
    <div className={styles.cardContainer}>
      <Form
        isSelected={isSelected}
        handleInputChange={handleInputChange}
        value={value}
        value2={value2}
        value3={value3}
        handleInputChange2={handleInputChange2}
        handleInputChange3={handleInputChange3}
        rate={rate}
        setRate={setRate}
        handlePercent={handlePercent}
        btnColor={btnColor}
        setBtnColor={setBtnColor}
        borderColor={borderColor}
        setBorderColor={setBorderColor}
        resetColor={resetColor}
        setResetColor={setResetColor}
        borderColor2={borderColor2}
        setBorderColor2={setBorderColor2}
        borderColor3={borderColor3}
        setBorderColor3={setBorderColor3}
        resultperson={resultperson}
        resultTotal={resultTotal}
        amount={amount}
        setAmount={setAmount}
        total={total}
        setTotal={setTotal}
      />

      <Result
        resultperson={resultperson}
        resultTotal={resultTotal}
        resetColor={resetColor}
        setResetColor={setResetColor}
        amount={amount}
        setAmount={setAmount}
        total={total}
        setTotal={setTotal}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};
