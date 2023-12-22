import { ChangeEvent } from "react";
import style from '../static/components.module.scss'

interface SwitchProps {
    isChecked: boolean,
    handleToggle: (event: ChangeEvent<HTMLInputElement>) => void
}


const Switch = ({ isChecked, handleToggle }: SwitchProps) => {

    return (
        <>
                        <label className={style.switch}>
                        <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={handleToggle} 
                        />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
        </>
    );
};

export default Switch;