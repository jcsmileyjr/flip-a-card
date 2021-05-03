import './timer.css'

const Timer = props => {
    return(
        <main className="timer__section--style">
            <p className="timer__section--style"><span className="timer__title--style">Timer</span> {props.counter}</p>
        </main>
    )
};

export default Timer;