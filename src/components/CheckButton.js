import React from "react";
import styles from './CheckButton.module.css'

export default function CheckButton({setArrayDistrict, children, isOn, arrayDistrict}) {
    function setOn(){
        console.log(arrayDistrict)
        if(isOn)
        {
            console.log(100)
            setArrayDistrict(arrayDistrict.filter(item => item !== children));
        }
        else
        {
            if(arrayDistrict === undefined || arrayDistrict.lenght == 0)
                setArrayDistrict([children])
            else
                setArrayDistrict([...arrayDistrict,children])
        }
}
    return(
        <div className={styles.MainDiv} onClick={(() => setOn())}>
            <div className={styles.CheckDivBig}>
                {isOn && <div className={styles.CheckDiv}> </div>}
            </div>
            {children}
        </div>
    )
}