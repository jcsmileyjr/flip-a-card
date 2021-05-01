
import './card.css';
import React from 'react';

const Card = props => {

    return(
        <main className={`card__style ${props.correct ? props.cardColor : "front"}`} onClick={()=> {props.flipCard()}}>
            
        </main>
    );
}

export default Card;