
import './App.css';
import playingCards from './data/cards';

import Card from './components/Card/Card';
import Score from './components/Score/Score';
import Timer from './components/Timer/Timer';

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
      <section className="art1">Art1</section>
      <section className="game">
        {gameArea}
      </section>
      <section className="art2">Art2</section>
      <section className="restart">Restart</section>
    </main>
  );
}

export default App;
