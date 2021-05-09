import './score.css'
const Score = props => {
    return(
        <article>
            <p aria-label="Display the current score" className="score__section--style"><span className="score__title--style">Score</span> {props.score}</p>
        </article>
    )
}

export default Score;