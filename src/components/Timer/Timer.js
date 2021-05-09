import './timer.css'

const Timer = props => {
    return(
        <article className="timer__section--style">
            <p role="timer" aria-label="Displays the timer for the game" className="timer__section--style"><span className="timer__title--style">Timer</span> {props.counter}</p>
        </article>
    )
};

export default Timer;