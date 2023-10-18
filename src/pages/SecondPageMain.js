import React, { useState, useEffect } from "react";
import SecondPage from "./SecondPage";


let DICT_CHTO = {
    "Екатеринбург" : "Ekaterinburg",
    "Тула" : "Tula",
    "Петрозаводск" : "Petrozavodsk"
}

export default function SecondPageMain({ prevPage, curCity, dictCity }) {
  const [dictResponse, setDictResponse] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const promises = Object.values(dictCity).map((e) =>
        fetch('http://localhost:8000/district?city=' + DICT_CHTO[curCity] +'&district=' + e)
          .then((response) => response.json())
          .then((data) => {
              setDictResponse((prevData) => ({
                  ...prevData,
                  [e]: data,
                }));
               // console.log( dictResponse.length + "%")
          })
          .catch((error) => console.error(error))
      );

      await Promise.all(promises);
    };

    fetchData();
  }, []);

    console.log("curCity = " + curCity + "\tdictCity = " + dictCity)  

    return (
        <>
        <SecondPage
            prevPage={prevPage}
            curCity={curCity}
            dictCity={dictCity}
            dictResponse={dictResponse}
    
        ></SecondPage>
    </>
  );
}