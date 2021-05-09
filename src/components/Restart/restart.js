import './restart.css';

const Restart = (props) => {
    return(
        <article>
            <button aria-label="Button to re-start the game" type="button" className="button__style" onClick={()=>{props.reset()}}>Restart</button>
        </article>
    )
};

export default Restart;