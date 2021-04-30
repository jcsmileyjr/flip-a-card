const unmixedCards = [
    {id: 0, color: "red"},
    {id: 1, color: "red"},
    {id: 2, color: "blue"},
    {id: 3, color: "blue"},
    {id: 4, color: "orange"},
    {id: 5, color: "orange"},
    {id: 6, color: "green"},
    {id: 7, color: "green"},
    {id: 8, color: "yello"},
    {id: 9, color: "yello"},
    {id: 10, color: "purple"},
    {id: 11, color: "ppurple"},
    {id: 12, color: "navy"},
    {id: 13, color: "navy"},
    {id: 14, color: "pink"},
    {id: 15, color: "pink"},
];

const playingCards = () => {
    const cards = unmixedCards.map(card => {
        return card;
    });
    return cards;
}

export default playingCards;





 