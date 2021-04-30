
import './card.css';
import React, {useState} from 'react';

const Card = props => {
    const [flipped, setFlipped] = useState(false);
    const flip = () => {
        setFlipped(!flipped);
    }

    return(
        <main className={flipped ? "back card__style":"front card__style"} onClick={()=> {flip(); props.getID()}}>
            <p>{props.cardColor}</p>
        </main>
    );
}

export default Card;