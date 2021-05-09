
import './card.css';
import React from 'react';

const Card = props => {

    return(
        <article className="card__style front" onClick={()=> {props.flipCard()}}>
            <img aria-label="Clickable card that shows an image when clicked" src={props.image} className={`image ${props.correct ? "showImage" : "hideImage"}`} alt="" />
        </article>
    );
}

export default Card;