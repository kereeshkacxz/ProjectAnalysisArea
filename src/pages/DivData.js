import React, {useState, useEffect} from "react";
import styles from '../styles/DivData.module.css'
import ColorArray from "../components/ColorArray";
import TextArray from "../components/TextArray"

import Score from "../components/Score";

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
        "Весь город": 'all',
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

    const [recom, setRecom] = useState("Загрузка...");

    useEffect(() => {
        const fetchData = async () => {
            setRecom("Загрузка...")
            if(arrayDistrict.length !== 0 ){
                try {
                    const response = await fetch('http://localhost:8000/rec?score=' + dictData['serviceValue'].reduce((a, b) => a + b, 0));
                    const data = await response.text();
                    setRecom(data);
                    console.log("data =", data);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchData();
    }, [arrayDistrict]);

    return(
        <>
        <div className={styles.divTitle}>
            {arrayDistrict.length !== 0 ? <ColorArray textArray={arrayDistrict} /> : "Район не выбран"}   
        </div>
        {arrayDistrict.length !== 0 && 
        <div style={{display: "flex", gap: "20px", flexDirection: "column"}}>
                <TextArray title="Положительные точки:" partOfDictResponse={dictData["posPlace"]} isTotal={true}/>
                <TextArray title="Отрицательные точки:" partOfDictResponse={dictData["negPlace"]} isTotal={true}/>
                <TextArray title="Среднее расстояние:" partOfDictResponse={dictData["averageData"]} isTotal={false}/>
                <div className={styles.textRec}>{recom}</div>
                <div className={styles.divScore}>
                    <Score title={"Оценка по критериям:"} maxVal={60} score={Math.round(dictData['expertValue'].reduce((a, b) => a+b, 0 )/(Object.keys(dictData['expertValue']).length))}></Score>
                    <Score title={"Оценка нашего сервиса:"} maxVal={500}score={Math.round(dictData['serviceValue'].reduce((a, b) => a+b, 0 )/(Object.keys(dictData['serviceValue']).length))}></Score>
                    </div>
        </div>}
        </>
    )
}