
import './App.css';
import playingCards from './data/cards';

import Card from './components/Card/Card';
import Score from './components/Score/Score';
import Timer from './components/Timer/Timer';
import cartoonMan from './assets/clumsy.png';
import cartoonLady from './assets/laying.png';
import Restart from './components/Restart/restart';

function App() {

  const cards = playingCards();
  const gameArea = cards.map((cards) => 
    <Card />
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
