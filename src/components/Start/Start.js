import './start.css';
import React, {useState} from 'react';

const Start = (props) => {
    const [disable, setdisable] = useState(false);
    const startGame = () => {
        setdisable(true);
    }

    return(
        <article>
            <button aria-label="Button to start the timer for the game" type="button" className={`start__style ${disable?"greyOut":""}`} onClick={() => {props.startTimer(); startGame()}} disabled={disable} >Play</button>
        </article>
    )
};

export default Start;