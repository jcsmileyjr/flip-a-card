import './comment.css';

const Comments = (props) => {
    return(
        <main className="comment__section--style">
            <p className="comment__text--style">{props.comment}</p>
        </main>
    );
}

export default Comments;