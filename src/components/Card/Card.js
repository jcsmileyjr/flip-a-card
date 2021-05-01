
import './card.css';
import React from 'react';

const Card = props => {

    return(
        <main className="card__style front" onClick={()=> {props.flipCard()}}>
            <img src={props.image} className={`image ${props.correct ? "showImage" : "hideImage"}`} alt="" />
        </main>
    );
}

export default Card;