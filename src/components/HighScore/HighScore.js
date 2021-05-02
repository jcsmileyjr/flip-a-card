import './highScore.css';

const HighScore = (props) => {
    return(
        <main className="oldScore">
            <h2>Highest Score: {props.highestScore}</h2>
        </main>
    );
}

export default HighScore;