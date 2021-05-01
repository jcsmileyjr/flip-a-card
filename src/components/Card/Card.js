
import './card.css';
import React from 'react';

const Card = props => {

    return(
        <main className={props.correct ? "back card__style":"front card__style"} onClick={()=> {props.flipCard()}}>
            <p>{props.cardColor}</p>
        </main>
    );
}

export default Card;