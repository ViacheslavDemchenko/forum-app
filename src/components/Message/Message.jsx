import './Message.css';

const Message = ({text, user}) => {

    return(
        <div className="comment">
            <div className="comment__text">{text}</div>
            <div className="comment__user">Ник пользователя: &nbsp;
                <span>{user}</span>
            </div>
        </div>
    );
}

export { Message };