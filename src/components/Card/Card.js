
import './card.css';
import React from 'react';

const Card = props => {

    return(
        <main className={`card__style ${props.correct ? props.cardColor : "front"}`} onClick={()=> {props.flipCard()}}>
            <img src={props.image} className="image" alt="" />
        </main>
    );
}

export default Card;