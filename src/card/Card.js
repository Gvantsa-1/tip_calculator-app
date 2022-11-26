import styles from "../card/Card.module.css";
import { Form } from "../form/Form";
import { Result } from "../result/Result";

export const Card = (props) => {
  const { amount, total, setAmount, setTotal } = props;
  return (
    <div className={styles.cardContainer}>
      <Form
        setTotal={setTotal}
        setAmount={setAmount}
        amount={amount}
        total={total}
      />
      <Result
        setTotal={setTotal}
        amount={amount}
        setAmount={setAmount}
        total={total}
      />
    </div>
  );
};
