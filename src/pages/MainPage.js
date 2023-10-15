import React, { Component } from "react";
import styles from '../styles/MainPage.module.css'

export default function MainPage({nextPage, setCurCity, dictCity}){
    return(
        <div className={styles.background}>
            <div className={styles.backgroundOpacityColor}>
                <h1>Выберите город:</h1>
                <div className={styles.contentWrapper}>
                    <div className={styles.btnRowGroup}>
                        {Object.keys(dictCity).map((e, idx) =>
                            <button key={idx} className={styles.changeBtn} onClick={(() => {setCurCity(e); nextPage();})}> {e} </button>)}
                    </div>
                </div> 
            </div>
        </div>
    )
}