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
      />
      <Result />
    </div>
  );
};
