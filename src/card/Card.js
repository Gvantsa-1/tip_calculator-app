import styles from '../card/Card.module.css';
import {Form} from '../form/Form';
import {Result} from '../result/Result'



export const Card=()=>{
return(
<div className={styles.cardContainer}>
<Form />
<Result />
</div>

)
}