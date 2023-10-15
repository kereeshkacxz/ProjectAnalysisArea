import React from "react";
import styles from '../styles/DivData.module.css'
import ColorArray from "../components/ColorArray";
import TextArray from "../components/TextArray"

export default function DivData({dictResponse, arrayDistrict}) {
    const DICT_OF_DISTRICT ={
        "Кукковка":"Kukkovka",
        "Центр":"Centre",
        "Голиковка":"Golikovka",
        "Бараний берег":"RamBeach",
        "Древлянка":"Drevlyanka",
        "Железнодорожный":"Zheleznodorozhnyi",
        "Зарека":"Zareka",
        "Зимник":"Zimnik",
        "Каменный бор":"KamennyiBor",
        "Ключевая":"Klychevaya",
        "Октябрьский":"Oktyabrskiy",
        "Первомайский":"Pervomaiskiy",
        "Перевалка":"Perevalka",
        "Пески":"Peski",
        "Птицефабрика":"Ptitsefabrika",
        "Рыбка":"Rybka",
        "Сайнаволок":"Sainavolok",
        "Северная промзона":"SevernayaPromzona",
        "Соломенное":"Solomennoye",
        "Сулажгора":"Sulazhgora",
        "Тепличный":"Teplichnyi",  
    }
    let dictData = {'expertValue': [], 'serviceValue': [], 
        'posPlace': [[], {}], 
        'negPlace': [[], {}], 
        'averageData': [[], {}] };


    arrayDistrict.map((e) =>{
        let curDict = dictResponse[DICT_OF_DISTRICT[e]];
        dictData["expertValue"].push(curDict["expertValue"]);
        dictData["serviceValue"].push(curDict["serviceValue"]);
        ["posPlace", "averageData", "negPlace"].map((w)=>
        {
            dictData[w][0].push(curDict[w][0]);
            Object.keys(curDict[w][1]).map((q) =>
            {
                if(dictData[w][1][q] === undefined)
                    dictData[w][1][q] = [];
                dictData[w][1][q].push(curDict[w][1][q]);   
            }
            )
        }
        )
    })   

    return(
        <>
        <div className={styles.divTitle}>
            {arrayDistrict.length != 0 ? <ColorArray textArray={arrayDistrict} /> : "Район не выбран"}   
        </div>
        {arrayDistrict.length != 0 && 
        <div>
                <TextArray title="Положительные точки:" partOfDictResponse={dictData["posPlace"]} />
                <TextArray title="Отрицательные точки:" partOfDictResponse={dictData["negPlace"]} />
                <TextArray title="Среднее расстояние:" partOfDictResponse={dictData["averageData"]} />
        </div>}
        </>
    )
}