import styles from './Button.module.css';
import { v4 as uuidv4 } from 'uuid';

const buttons = [
    {id: 1, value: 5 },
    {id: 2, value: 10 },
    {id: 3, value: 15 },
    {id: 4, value: 25},
    {id: 5, value: 50} ]

export const Button=()=>{
    return(
        <div className={styles.tipContainer}>
  { buttons.map((btn) => {
    return <button key={uuidv4()} className={styles.tipAmount} >{btn.value}%</button>
 })
}
 <input className={styles.tipCustom} placeholder="Custom"/>
 </div>


 )
}