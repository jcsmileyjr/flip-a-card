import './score.css'
const Score = props => {
    return(
        <main>
            <p><span className="score__title--style">Score</span> {props.score}</p>
        </main>
    )
}

export default Score;