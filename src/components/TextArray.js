import React from "react";
import styles from "../styles/TextArrays.module.css"
import ColorArray from "./ColorArray";
export default function TextArray({title, partOfDictResponse}) {
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
    console.log(partOfDictResponse[1])
    function parseData(array){
        if(array.lenght == 1)
            return array[0];
        
        return <div style={{display:"flex", gap:"5px", color:"white"}}>{array.reduce((a, b) => a+b, 0 )} <div style={{opacity:"0.8",display:"flex"}}>(<ColorArray textArray={array} />)</div> </div>
        
    }
    return(
        <div className={styles.blockForText}>
            <div className={styles.titleOfText}>{title}{parseData(partOfDictResponse[0])}</div>
            {Object.keys(partOfDictResponse[1]).map((e) => 
            <div className={styles.text}>
                <div style={{color:"rgba(255,255,255,0.7)"}}> { dictOfTitle[e] + ":"} </div> {parseData(partOfDictResponse[1][e])}
            </div>)}
        </div>
    )
}