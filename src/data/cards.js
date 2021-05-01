const unmixedCards = [
    {id: 16, color: "red", correct: false},
    {id: 1, color: "red", correct: false},
    {id: 2, color: "blue", correct: false},
    {id: 3, color: "blue", correct: false},
    {id: 4, color: "orange", correct: false},
    {id: 5, color: "orange", correct: false},
    {id: 6, color: "green", correct: false},
    {id: 7, color: "green", correct: false},
    {id: 8, color: "yellow", correct: false},
    {id: 9, color: "yellow", correct: false},
    {id: 10, color: "purple", correct: false},
    {id: 11, color: "purple", correct: false},
    {id: 12, color: "navy", correct: false},
    {id: 13, color: "navy", correct: false},
    {id: 14, color: "pink", correct: false},
    {id: 15, color: "pink", correct: false},
];

const getCards = () => {
    const cards = unmixedCards.map(card => {
        return card;
    });
    return cards;
}

export default getCards;





 