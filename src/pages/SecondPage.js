import React, { Component, useDeferredValue, useState } from "react";
import styles from '../styles/SecondPage.module.css'
import CheckButton from "../components/CheckButton";
import DivData from './DivData';

export default function SecondPage({prevPage, curCity, dictCity}){
    const [dictResponse, setDictResponse] = useState({'Peski': {'expertValue': 60, 'serviceValue': 129, 'posPlace': [9, {'government': 0, 'park': 7, 'service': 2, 'cafe': 0, 'marketFood': 0, 'market': 0, 'hospital': 0, 'interPlace': 0, 'education': 0, 'sports': 0, 'atm': 0, 'bank': 0, 'shoppingCentre': 0, 'chemistry': 0}], 'negPlace': [1, {'fast_food': 0, 'pub': 0, 'tobacco': 0, 'prison': 0, 'weapons': 0, 'alcohol': 0, 'grave_yard': 1}], 'averageData': [5, {'avgEducation': 0, 'avgPark': 2062, 'avgChemistry': 0, 'avgMarketFood': 0, 'avgCafe': 0}]},
    'Kukkovka': {'expertValue': -20, 'serviceValue': 381, 'posPlace': [195, {'government': 16, 'park': 32, 'service': 13, 'cafe': 4, 'marketFood': 22, 'market': 53, 'hospital': 2, 'interPlace': 1, 'education': 23, 'sports': 0, 'atm': 11, 'bank': 5, 'shoppingCentre': 4, 'chemistry': 9}], 'negPlace': [16, {'fast_food': 5, 'pub': 0, 'tobacco': 2, 'prison': 2, 'weapons': 0, 'alcohol': 7, 'grave_yard': 0}], 'averageData': [5, {'avgEducation': 1048, 'avgPark': 2513, 'avgChemistry': 822, 'avgMarketFood': 615, 'avgCafe': 898}]},
    'Centre' : {'expertValue': -20, 'serviceValue': 452, 'posPlace': [500, {'government': 36, 'park': 15, 'service': 53, 'cafe': 36, 'marketFood': 25, 'market': 181, 'hospital': 11, 'interPlace': 32, 'education': 26, 'sports': 0, 'atm': 21, 'bank': 28, 'shoppingCentre': 13, 'chemistry': 23}], 'negPlace': [54, {'fast_food': 24, 'pub': 2, 'tobacco': 10, 'prison': 1, 'weapons': 1, 'alcohol': 14, 'grave_yard': 2}], 'averageData': [5, {'avgEducation': 813, 'avgPark': 1211, 'avgChemistry': 287, 'avgMarketFood': 237, 'avgCafe': 189}]}});
    let [arrayDistrict, setArrayDistrict] = useState([]);
    let [dataResponse, setDataResponse] = useState([]);
    function getdata(url_adr) {
            const response =  fetch(url_adr)
            .then(response => response.json())
            .then(data => setDataResponse(data))
            .catch(error => console.error(error));
        }
    // getdata(`https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3Barea(id%3A3614195678)->.searchArea%3B(nwr%5B"shop"%5D(area.searchArea)%3Bnwr%5B"amenity"%5D(area.searchArea)%3Bnwr%5B"building"%5D(area.searchArea)%3Bnwr%5B"goverment"%5D(area.searchArea)%3Bnwr%5B"tourism"%5D(area.searchArea)%3Bnwr%5B"natural"%3D"wood"%5D(area.searchArea)%3B)%3Bout%20geom%3B`)
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
                                {Object.values(dictCity[curCity]).map((e, idx) =>
                                <CheckButton key={idx} setArrayDistrict={setArrayDistrict} isOn={arrayDistrict.includes(e)} arrayDistrict={arrayDistrict}>
                                    {e}
                                </CheckButton>
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
