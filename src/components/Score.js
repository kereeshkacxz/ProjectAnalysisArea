import React from "react";
import styles from "../styles/Score.module.css"


export default function Score({title, score, maxVal}) {

    var hue=((Math.max(0, score/maxVal))*120).toString(10);


    return(
        <div className={styles.mainDiv}>
            {title}
                <div className={styles.score} style={{color: ["hsl(",hue,",100%,50%)"].join("")}}>{score}</div>
            {"баллов"}
        </div>
    )
}