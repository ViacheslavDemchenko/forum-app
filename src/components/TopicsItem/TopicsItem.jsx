import './TopicsItem.css';

const TopicsItem = ({id, title, user, comments, time, topicRead, setFormShowing}) => {

    const topicOpenHandle = () => {
        topicRead(id);
        setFormShowing(true);
    }

    return(
        <tr className="topics__item" onClick={topicOpenHandle}>
            <td className="topics__item-title">{title}</td>
            <td className="topics__item-messages">{comments.length}</td>
            <td className="topics__item-time">{time}</td>
            <td className="topics__item-user">{user}</td>
        </tr>
    );
}

export { TopicsItem };