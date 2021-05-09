
import './App.css';
import React, {useState, useEffect} from 'react';
import playingCards from './data/cards';
import comments from './data/snarkyComments';

import Card from './components/Card/Card';
import Score from './components/Score/Score';
import Timer from './components/Timer/Timer';
import cartoonMan from './assets/clumsy.png';
import cartoonLady from './assets/laying.png';
import Restart from './components/Restart/restart';
import Start from './components/Start/Start';
import HighScore from './components/HighScore/HighScore';
import EndOfGame from './components/EndOfGame/EndOfGame';
import Comments from './components/Comments/Comments';

function App() {
  const [firstCardIndex, setFirstCard] = useState("");
  const [score, setScore] = useState(0);
  const [currentDeck, setCurrentDeck] = useState([]);
  const [counter, setCounter] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [highestScore, setHighestScore] = useState(0);
  const [snarkyComments, setComments] = useState([]);
  const [currentSnark, setSnark] = useState("");
  const [challengeMode, setChallengeMode] = useState(false);

  useEffect(() => { getCards(); startGameHighestScore(); getComments()}, []);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
    
  useEffect(() => {      
    endGame();
  })

  const startChallengeMode = () => {
    setChallengeMode(true);
    restartGame();
  }

  const endGame = () => {
    if((counter <= 0 && counter !== "") || score === 100){
      setGameOver(true);
      
      if(highestScore < score){
        localStorage.setItem("flipTheCard-HighestScore", score);
        setHighestScore(score);
      }
    }
  }

  const checkIfAllCardsShowing = () => {
    if(score >= 100){
      endGame();
    }
  }

  const getCards = () => {
    setCurrentDeck(playingCards());
  }

  const getComments = () => {
    setComments(comments);
  }

  const getRandomComment = () => {
    let message = snarkyComments[Math.floor(Math.random()*snarkyComments.length)];
   setSnark(message);
  }

  const startGameHighestScore = () => {
    const lastHighestScore = localStorage.getItem("flipTheCard-HighestScore");
    
    if(lastHighestScore === null){
      setHighestScore(0);
    }else{
      setHighestScore(lastHighestScore);
    }
  }

  const startTimer = () => {
    if(challengeMode){
      setCounter(45);
    }else{
      setCounter(60);
    }
  }

  const restartGame = () => {
    resetCards();// Manually reset cards correct property
    setScore(0);
    startTimer(); // Reset the timer based on if challenge mode is started
    setGameOver(false);
  }

  // Manually reset cards correct property in the restartGame()
  const resetCards = () => {
    let deck = currentDeck;
    deck.forEach(card => {
      card.correct = false;
    });
  }

  // Check if the cards are a match, if so, then set card to always show the image, update the score, etc.
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
        //checkIfAllCardsShowing();
        oldCard.correct = true;
        currentCard.correct = true;
      }else{
        oldCard.correct = true;
        currentCard.correct = true;
        showCardsBriefy(oldCard, currentCard);

        // If in challenge mode, user lose 3 points for each incorrect choice
        if(challengeMode){
          setScore(score -3);
        }
      }

      // Reset the matching
      setFirstCard("");
    }

    getRandomComment();
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
            <HighScore highestScore={highestScore} />
          </section>
          <section className="info">
            {counter !== "" &&
              <Score score={score} />
            }
            {counter !== "" &&
              <Timer counter={counter} />
            }

            {counter === "" &&
            <article role="note" className="descrition__container">
              <p aria-label="Description of the game" className="description">A memory matching card game where you elimate all cards as fast as you can!!!!</p>
            </article>
            }
          </section>
          <section className="art1">
            <img src={cartoonLady} className="art__style floatRight" alt="cartoon lady laying down" />
          </section>
          <section className="game">
            {gameArea}
            <Comments comment={currentSnark} />
          </section>
          <section className="art2">
            <img src={cartoonMan} className="art__style" alt="cartoon man dropping cards" />
          </section>
          <section className="restart">
            {counter === "" && 
              <Start startTimer={() => startTimer()} />
            }

            <Restart reset={()=>restartGame()} />
          </section>
        </main>
      }
      {gameOver &&
        <EndOfGame score={score} challenge={() => {startChallengeMode()}} reset={()=>restartGame()} />
      }
    </div>
  );
}

export default App;
