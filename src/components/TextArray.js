import React from "react";
import styles from "../styles/TextArrays.module.css"
import ColorArray from "./ColorArray";
export default function TextArray({title, partOfDictResponse, isTotal}) {
    const dictOfTitle={
        "government":"Образовательных учреждений",
        "park":"Парков",
        "service":"Сервисов",
        "cafe":"Кафе",
        "marketFood":"Продуктовых магазинов",
        "market":"Магазинов",
        "hospital":"Больниц",
        "interPlace":"Интересных мест",
        "chemistry":"Аптека",
        "education":"Образовательных учреждений",
        "atm":"Платежных терминалов",
        "bank":"Банков",
        "shoppingCentre":"Торговых центров",
        "sports":"Спортивных объектов",
        "fast_food":"Точек фастфуда",
        "pub":"Баров",
        "tobacco":"Табачных магазинов",
        "prison":"Тюрем",
        "weapons":"Оружейных магазинов",
        "alcohol":"Алкомаркетов",
        "grave_yard":"Кладбищ",
        "avgEducation":"От образовательных учреждений до отрицательных точек",
        "avgPark":"От парков до отрицательных точек",
        "avgChemistry":"От жилых домов до аптек",
        "avgMarketFood":"От жилых домов до продуктовых магазинов",
        "avgCafe":"От жилых домов до кафе"
    }

    function parseData(array){
        if(Object.keys(array).length == 1)
            if(isTotal)
                return array[0];
            else
                return (array[0] + 'м');
        
        if(isTotal)
            return <div style={{display:"flex", gap:"5px", color:"white"}}>{array.reduce((a, b) => a+b, 0 )} <div style={{opacity:"0.8",display:"flex"}}>(<ColorArray textArray={array} />)</div> </div>
        else
            return <div style={{display:"flex", gap:"5px", color:"white"}}>{Math.round(array.reduce((a, b) => a+b, 0 )/(Object.keys(array).length)) + 'м'} <div style={{opacity:"0.8",display:"flex"}}>(<ColorArray textArray={array} />)</div> </div>
    }
    return(
        <div className={styles.blockForText}>
            <div className={styles.titleOfText}>{title}{isTotal ? parseData(partOfDictResponse[0]) : ""}</div>
            {Object.keys(partOfDictResponse[1]).map((e) => 
            <div className={styles.text} key={e}>
                <div style={{color:"rgba(255,255,255,0.7)"}}> { dictOfTitle[e] + ":"} </div> {parseData(partOfDictResponse[1][e])}
            </div>)}
        </div>
    )
}