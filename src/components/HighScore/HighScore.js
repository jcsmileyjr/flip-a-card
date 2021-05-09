import './highScore.css';

const HighScore = (props) => {
    return(
        <article className="oldScore">
            <h2 aria-label="Display the current highest score" className="oldScore__title--style ">Highest Score: {props.highestScore}</h2>
            {props.challenge &&
                <h3 className="challengeMode--style">CHALLENGE MODE</h3>
            }
        </article>
    );
}

export default HighScore;