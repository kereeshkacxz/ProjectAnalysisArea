import React, { Component, useDeferredValue, useState } from "react";
import styles from '../styles/SecondPage.module.css'
import CheckButton from "../components/CheckButton";
import DivData from './DivData';

export default function SecondPage({prevPage, curCity, dictCity, dictResponse}){
    let [arrayDistrict, setArrayDistrict] = useState([]);
    return(
        <div className={styles.background}>
            <div className={styles.backgroundOpacityColor}>
                <div className={styles.contentWrapper}>
                    <div className={styles.contentLeftBox}>
                        <p className={styles.textForCity}>Город {curCity}</p>
                        <div className={styles.checkBoxWrapper}>
                            <div className={styles.checkBoxTitle}>
                                <p>Выбрать район</p>
                            </div>
                            <div className={styles.wrapperForCheckBlock}>
                                    {console.log("dictCity = " + dictCity)}
                                    {console.log(dictResponse)}
                                {Object.keys(dictCity).map((e, idx) =><>
                                { dictResponse[dictCity[e]] !== undefined ? <CheckButton key={idx} setArrayDistrict={setArrayDistrict} isOn={arrayDistrict.includes(e)} arrayDistrict={arrayDistrict}>
                                    {e}
                                </CheckButton> : <div style={{opacity: "0.8"}}>Загрузка..</div>}</>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentRightBox}>
                        <DivData dictResponse={dictResponse} arrayDistrict={arrayDistrict} />
                    </div>
                </div>
            <button className={styles.btnForBack} onClick={(() => {prevPage();})}>Назад</button>
            </div>
        </div>
    )
}
