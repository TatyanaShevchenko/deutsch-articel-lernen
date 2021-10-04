import {useEffect, useState} from 'react';

import './App.css';
import {Endung} from './components/Endung'

function App() {

  const [appData, setAppData] = useState([]);
  const [isCorrect, setIsCorrect] = useState("");

  const data = {
    Der: ["Honig", "Student", "Optimismus", "Motor", "Romantiker", "Ingenieur", "Frühling", "Juwelier", "Pianist", "Frisör", "Gast"],
    Die: ["Bäckerei", "Lehrerin", "Möglichkeit", "Freiheit", "Landschaft", "Meinung", "Kamera", "Parade", "Zigarette", "Theorie", "Musik", "Maschine", "Production", "Qualität", "Alternative", "Skepsis", "Natur"],
    Das: ["Mädchen", "Hotel", "Benzin", "Lernen", "Zentrum", "Experiment", "Geschlecht", "Fräulein", "Datum", "Auto", "Meeting", "Klima", "Bett"]
  }

  useEffect(()=>{
    setAppData(getRandomWord(data));
  }, [])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomWord(data) {
    const getRandomArticel = (obj) => {
      const keys = Object.keys(obj);
      return keys[getRandomInt(3)];
    };

    const article = getRandomArticel(data);
    const words = data[article];

    const randomWord = words[Math.floor(Math.random() * words.length)];
    return [article, randomWord];
  }

  const handleClick =()=> {
    setAppData(getRandomWord(data));
    setIsCorrect("");
  }

  const [articel, word]= appData; 

  return (
    <div className="App">
      {appData&&<Endung word={word} articel={articel} setIsCorrect={setIsCorrect}/>}
      {isCorrect && <p className="App__answer">{isCorrect==="correct" ? "Correct" : "Incorrect"}</p>}
      {isCorrect && <p className="App__answer">{articel} {word}</p>}
      <button className="App__next" onClick={handleClick}>nächstes Wort</button>
    </div>
  );
}

export default App;
