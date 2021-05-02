
import './App.css';
import React, {useState, useEffect} from 'react';
import playingCards from './data/cards';

import Card from './components/Card/Card';
import Score from './components/Score/Score';
import Timer from './components/Timer/Timer';
import cartoonMan from './assets/clumsy.png';
import cartoonLady from './assets/laying.png';
import Restart from './components/Restart/restart';
import Start from './components/Start/Start';
import HighScore from './components/HighScore/HighScore';
import EndOfGame from './components/EndOfGame/EndOfGame';

function App() {
  const [firstCardIndex, setFirstCard] = useState("");
  const [score, setScore] = useState(0);
  const [currentDeck, setCurrentDeck] = useState([]);
  const [counter, setCounter] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => { getCards(); }, []);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
    
  useEffect(() => {      
    endGame();
  })

  const endGame = () => {
    if(counter <= 0 || counter !== ""){
      setGameOver(true);
    }
  }

  const getCards = () => {
    setCurrentDeck(playingCards());
  }

  const startTimer = () => {
    setCounter(60);    
  }

  const restartGame = () => {
    resetCards();// Manually reset cards correct property
    setScore(0);
    setCounter(60);
    setGameOver(false);
  }

  // Manually reset cards correct property in the restartGame()
  const resetCards = () => {
    let deck = currentDeck;
    deck.forEach(card => {
      card.correct = false;
    });
  }

  // Match the colors
  const matchCardID = (index) => {
    if(counter === ""){
      return;
    }
    let currentCard = currentDeck[index];

    // If there is no previously saved card, save the current selected's index
    if(firstCardIndex === ""){
      setFirstCard(index);
      currentCard.correct = true;
    }else{
      //Match the previous saved card's color to the current card's color
      let oldCard = currentDeck[firstCardIndex];

      if(currentCard.color === oldCard.color){
        setScore(score + 10);
        oldCard.correct = true;
        currentCard.correct = true;
      }else{
        oldCard.correct = true;
        currentCard.correct = true;
        showCardsBriefy(oldCard, currentCard);
      }

      // Reset the matching
      setFirstCard("");
    }
  }

  const showCardsBriefy = (old, current) => {
    setTimeout(() => {
      current.correct = false;
      old.correct = false;
    },500);
  }

  const cards = currentDeck;
  const gameArea = cards.map((card, index) => 
    <Card key={index} id={card.id} correct={card.correct} cardColor={card.color} image={card.picture} flipCard= {() => {matchCardID(index)}}  />
  );  

  return (
    <div>
      {!gameOver &&
        <main className="App">
          <section className="title">
            <h1 className="title__style">Flip the Card</h1>
            <HighScore highestScore={0} />
          </section>
          <section className="info">
            {counter !== "" &&
              <Score score={score} />
            }
            {counter !== "" &&
              <Timer counter={counter} />
            }

            {counter === "" &&
            <div className="descrition__container">
              <p className="description">A memory matching card game where you elimate all cards as fast as you can!!!!</p>
            </div>
            }
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
            <Restart reset={()=>restartGame()} />
            {counter === "" && 
              <Start startTimer={() => startTimer()} />
            }
          </section>
        </main>
      }
      {gameOver &&
        <EndOfGame score={score} reset={()=>restartGame()} />
      }
    </div>
  );
}

export default App;
