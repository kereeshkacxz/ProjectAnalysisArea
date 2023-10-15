import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MainPage from './pages/MainPage'
import SecondPageMain from './pages/SecondPageMain'

function App() {
    const [idx, setIdx] = useState(0);
    const [curCity, setCurCity] = useState("");
    const dictCity = {
        "Петрозаводск":{"Кукковка":"Kukkovka",
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
                        "Тепличный":"Teplichnyi", },
        "Екатеринбург": {"Весь город": "all"},
        "Тула": {"Весь город": "all"}
    };
    return (
        <div className="App">
        {idx === 0 && <MainPage nextPage={(() => setIdx(1))} setCurCity={setCurCity} dictCity={dictCity} />}
        {idx === 1 && <SecondPageMain curCity={curCity} prevPage={(() => setIdx(0))} dictCity={dictCity[curCity]}  />}
        </div>
    );
}

export default App;
