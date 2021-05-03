import './highScore.css';

const HighScore = (props) => {
    return(
        <main className="oldScore">
            <h2 className="oldScore__title--style ">Highest Score: {props.highestScore}</h2>
        </main>
    );
}

export default HighScore;