
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
  const [firstCardIndex, setFirstCard] = useState("");
  const [score, setScore] = useState(0);
  const [currentDeck, setCurrentDeck] = useState([]);

  useEffect(() => { getCards(); }, []);

  const getCards = () => {
    setCurrentDeck(playingCards());
  }

  // Match the colors
  const matchCardID = (index) => {
    let currentCard = currentDeck[index];

    // If there is no previously saved card, save the current selected's index
    if(firstCardIndex === ""){
      setFirstCard(index);
      currentCard.correct = true;
    }else{
      //Matcht the previous saved card's color to the current card's color
      let oldCard = currentDeck[firstCardIndex];
      console.log(`old card color is ${oldCard.color}`)
      console.log(`current card color is ${currentCard.color}`)
      if(currentCard.color === oldCard.color){
        setScore(score + 10);
        oldCard.correct = true;
        currentCard.correct = true;
       console.log("match")
      }else{
        currentCard.correct = false;
        oldCard.correct = false;
        console.group("no match")
      }

      // Reset the matching
      setFirstCard("");
    }

  }

  const cards = currentDeck;
  const gameArea = cards.map((card, index) => 
    <Card key={index} id={card.id} cardColor={card.color} getID= {() => {matchCardID(index)}}  />
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
