
import './App.css';
import React, {useState, useEffect} from 'react';
import playingCards from './data/cards';

import Card from './components/Card/Card';
import Score from './components/Score/Score';
import Timer from './components/Timer/Timer';
import cartoonMan from './assets/clumsy.png';
import cartoonLady from './assets/laying.png';
import Restart from './components/Restart/restart';

function App() {
  const [firstCard, setFirstCard] = useState(0);
  const [score, setScore] = useState(0);
  const [currentDeck, setCurrentDeck] = useState([]);

  useEffect(() => { getCards(); }, []);

  const getCards = () => {
    setCurrentDeck(playingCards());
  }

  const matchCardID = (index) => {

    // const currentCard = 
    // // Save first card if there is no current card under consideration
    // if(firstCard === ""){
    //   setFirstCard(card);
    // }else{
    //   // if that color matches the first color
    //   if(firstCard === color){
    //     const newScore = score + 10;
    //     setScore(newScore);
    //     alert(score);
    //   }else{
    //     alert("no match")
    //   }
    // }
  }

  const cards = currentDeck;
  const gameArea = cards.map((index, card) => 
    <Card id={card.id} cardColor={card.color} getID= {matchCardID(index)}  />
  );

  

  return (
    <main className="App">
      <section className="title">
        <h1 className="title__style">Flip the Card</h1>
      </section>
      <section className="info">
        <Score score="100" />
        <Timer time="60" />
      </section>
      <section className="art1">
      <img src={cartoonLady} className="art__style floatRight" alt="cartoon lady laying down" />
      </section>
      <section className="game">
        {gameArea}
      </section>
      <section className="art2">
        <img src={cartoonMan} className="art__style" alt="cartoon man dropping cards" />
      </section>
      <section className="restart">
        <Restart />
      </section>
    </main>
  );
}

export default App;
