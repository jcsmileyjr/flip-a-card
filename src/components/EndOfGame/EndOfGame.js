import './endOfGame.css';

import Restart from '../Restart/restart';

const EndOfGame = (props) => {
    return(
        <article className="endGame__style">
            {(props.score >= 80) &&
                <h1 className="title--style"> Winner !!!</h1>
            }
            <h3 aria-label="Display of the ending score">Score: {props.score}</h3>
            <hr/>
            <h2>You have a choice</h2>
            <h3 className="title--style">Challenge Mode:</h3>
            <ul className="endGame__list--noDots">
                <li>45 seconds instead of 60 seconds</li>
                <li>Lose a point for every incorrect match</li>
            </ul>
            <button onClick={()=> {props.challenge()}} aria-label="Button to start challenge mode" type="button" className="endGame__button--style">Challenge Mode</button>
            <p>or</p>
            <Restart reset={props.reset} />
        </article>
    );
}

export default EndOfGame;