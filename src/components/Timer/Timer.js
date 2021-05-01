import './timer.css'
import React, {useEffect, useState} from 'react';

const Timer = props => {
    const [counter, setCounter] = useState(60);

    // Third Attempts
    useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);

    return(
        <main>
            <p><span className="timer__title--style">Timer</span> {counter}</p>
        </main>
    )
};

export default Timer;