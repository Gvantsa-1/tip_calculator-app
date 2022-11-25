import styles from "../card/Card.module.css";
import { Form } from "../form/Form";
import { Result } from "../result/Result";

export const Card = (props) => {
  const { amount, total } = props;
  return (
    <div className={styles.cardContainer}>
      <Form amount={amount} total={total} />

      <Result />
    </div>
  );
};
