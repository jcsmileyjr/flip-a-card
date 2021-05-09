
import './card.css';
import React from 'react';

const Card = props => {
    const flipCardViaEnter = () => {
        props.flipCard();
    }

    return(
        <article tabIndex="0" className="card__style front" onKeyPress={() => {flipCardViaEnter()}} onClick={()=> {props.flipCard()}}>
            <img aria-label="Clickable card that shows an image when clicked" src={props.image} className={`image ${props.correct ? "showImage" : "hideImage"}`} alt="" />
        </article>
    );
}

export default Card;