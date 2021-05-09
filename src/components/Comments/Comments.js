import './comment.css';

const Comments = (props) => {
    return(
        <article className="comment__section--style">
            <p aria-label="Random snarky comment" className="comment__text--style">{props.comment}</p>
        </article>
    );
}

export default Comments;