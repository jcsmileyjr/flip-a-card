import './restart.css';

const Restart = (props) => {
    return(
        <main>
            <button type="button" className="button__style" onClick={()=>{props.reset()}}>Restart</button>
        </main>
    )
};

export default Restart;