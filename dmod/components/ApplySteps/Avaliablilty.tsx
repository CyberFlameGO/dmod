import react from 'react';
import styles from '../../styles/apply.module.scss';
import forms from '../../styles/forms.module.scss';
import Buttons from '../../styles/buttons.module.scss';


function AvaliablilityStep(props) {
    return (
        <div>
            <div className={styles.multi_form}>
                <span>Active hours (24 hour)</span>
                <div className={styles.input_container}>
                    <input placeholder={"10:30"} />
                    <span>-</span>
                    <input placeholder={"23:45"} />
                </div>
            </div>
            <div className={styles.button_container_form}>
                    <button className={`${Buttons.small_button} ${Buttons.border} ${forms.button_spacer}`} name={"back"} >Go Back</button>
                    <button className={`${Buttons.small_button} ${Buttons.colored}`} name={"forward"}>Next</button>
            </div>
        </div>
    )
}


export default AvaliablilityStep;