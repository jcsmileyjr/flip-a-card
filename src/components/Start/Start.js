import './start.css';
import React, {useState} from 'react';

const Start = (props) => {
    const [disable, setdisable] = useState(false);
    const startGame = () => {
        setdisable(true);
    }

    return(
        <main>
            <button type="button" className={`start__style ${disable?"greyOut":""}`} onClick={() => {props.startTimer(); startGame()}} disabled={disable} >Play</button>
        </main>
    )
};

export default Start;