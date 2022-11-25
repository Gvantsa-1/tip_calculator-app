import styles from "../card/Card.module.css";
import { Form } from "../form/Form";
import { Result } from "../result/Result";

export const Card = (props) => {
  const { rate, amount, total } = props;
  return (
    <div className={styles.cardContainer}>
      <Form rate={rate} amount={amount} total={total} />

      <Result />
    </div>
  );
};
