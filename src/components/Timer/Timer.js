import './timer.css'
const Timer = props => {
    return(
        <main>
            <p><span className="timer__title--style">Timer</span> {props.time}</p>
        </main>
    )
};

export default Timer;