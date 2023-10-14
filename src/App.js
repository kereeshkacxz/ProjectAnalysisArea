import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage'

function App() {
    const [idx, setIdx] = useState(0);
    const [curCity, setCurCity] = useState("");
    const dictCity = {
        "Петрозаводск":["Кукковка","Центр","Древлянка"],
        "Екатеринбург":["Ленинский","Академический","Октябрьский"],
        "Тула":["Центральный","Пролетарский","Советский"]
    };
    return (
        <div className="App">
        {idx === 0 && <MainPage nextPage={(() => setIdx(1))} setCurCity={setCurCity} dictCity={dictCity} />}
        {idx === 1 && <SecondPage curCity={curCity} prevPage={(() => setIdx(0))} dictCity={dictCity}  />}
        </div>
    );
}

export default App;
