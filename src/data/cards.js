import  Image1 from '../assets/clumsy.png';
import  Image2 from '../assets/laying.png';
import  Image3 from '../assets/peep-woman-1.png';
import  Image4 from '../assets/peeps-man-1.png';
import  Image5 from '../assets/peep-sitting-3.png';
import  Image6 from '../assets/coffee-doddle.png';
import  Image7 from '../assets/doc-nurse-6.png';
import  Image8 from '../assets/loving.png';
import  Image9 from '../assets/peep-sitting-2.png';
import  Image10 from '../assets/coder-image.png';

const unmixedCards = [
    {id: 16, color: "red", correct: false, picture:Image1},
    {id: 1, color: "red", correct: false, picture:Image1},
    {id: 2, color: "blue", correct: false, picture:Image2},
    {id: 3, color: "blue", correct: false, picture:Image2},
    {id: 4, color: "orange", correct: false, picture:Image3},
    {id: 5, color: "orange", correct: false, picture:Image3},
    {id: 6, color: "green", correct: false, picture:Image4},
    {id: 7, color: "green", correct: false, picture:Image4},
    {id: 8, color: "yellow", correct: false, picture:Image5},
    {id: 9, color: "yellow", correct: false, picture:Image5},
    {id: 10, color: "purple", correct: false, picture:Image6},
    {id: 11, color: "purple", correct: false, picture:Image6},
    {id: 12, color: "navy", correct: false, picture:Image7},
    {id: 13, color: "navy", correct: false, picture:Image7},
    {id: 14, color: "pink", correct: false, picture:Image8},
    {id: 15, color: "pink", correct: false, picture:Image8},
    {id: 16, color: "gold", correct: false, picture:Image9},
    {id: 18, color: "gold", correct: false, picture:Image9},
    {id: 16, color: "brown", correct: false, picture:Image10},
    {id: 18, color: "brown", correct: false, picture:Image10},
];

const getCards = () => {
    let cards = unmixedCards.sort(() => Math.random() - 0.5);
    return cards;
}

export default getCards;





 