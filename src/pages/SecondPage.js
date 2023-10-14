import React, { Component, useDeferredValue, useState } from "react";
import styles from '../styles/SecondPage.module.css'
import CheckButton from "../components/CheckButton";

export default function SecondPage({prevPage, curCity, dictCity}){
    let [arrayDistrict, setArrayDistrict] = useState([]);
    return(
        <div className={styles.background}>
            <div className={styles.contentWrapper}>
                <div className={styles.contentRightBox}>
                    <p className={styles.textForCity}>Город {curCity}</p>
                    <div className={styles.checkBoxWrapper}>
                        <div className={styles.checkBoxTitle}>
                            <p>Выбрать район</p>
                        </div>
                        <div className={styles.wrapperForCheckBlock}>
                            {Object.values(dictCity[curCity]).map((e) =>
                            <CheckButton setArrayDistrict={setArrayDistrict} isOn={arrayDistrict.includes(e)} arrayDistrict={arrayDistrict}>
                                {e}
                            </CheckButton>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.contentLeftBox}>
                </div>
            </div>
            <button className={styles.btnForBack} onClick={(() => {prevPage();})}>Назад</button>
        </div>
    )
}