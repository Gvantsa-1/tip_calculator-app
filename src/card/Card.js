import styles from "../card/Card.module.css";
import { Form } from "../form/Form";
import { Result } from "../result/Result";

export const Card = (props) => {
  const { isSelected, min, max, handleInputChange, value, value2 } = props;
  return (
    <div className={styles.cardContainer}>
      <Form
        isSelected={isSelected}
        handleInputChange={handleInputChange}
        min={min}
        max={max}
        value={value}
        value2={value2}
      />
      <Result />
    </div>
  );
};
