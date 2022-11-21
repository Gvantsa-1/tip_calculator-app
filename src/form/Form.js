import styles from './Form.module.css';
import {dollarIcon} from '../assets/icon-dollar.svg';
import {peopleIcon} from '../assets/icon-person.svg';
import {Button} from '../button/Button';


export const Form=()=>{
    return(
  <div className={styles.formContainer}>
    <h2 className={styles.billTitle}>Bill</h2>
    <input className={styles.bill}/>
    <h2 className={styles.selectTip}>Select Tip %</h2>
    <Button />
    <h2 className={styles.NumPeople}>Number of People</h2>
    <input className={styles.inputNumPeople}/>
  </div>
    
    );
    
    
    }