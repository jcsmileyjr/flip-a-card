
import './App.css';
import playingCards from './data/cards';

import Card from './components/Card/Card';

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
      <section className="info">Time: 60                     Score: 100</section>
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
