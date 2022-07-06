import './TopicActive.css';

import { useState, useEffect } from 'react';

import { Messages } from '../Messages/Messages';
import { Form } from '../Form/Form';

const TopicActive = ({activeTopic, formShowing, name, setName, comment, setComment, addComment, comments}) => {
    const {title, text, user} = activeTopic;
    const [mes, setMes] = useState([]);

    useEffect(() => {
        if (comments) {
            setMes(comments);
        }
    }, [comments, mes]);

    return(
        <main className="App__main">
            <h2>Текущая тема</h2>
            <div className="active-topic">
                <h3>{title}</h3>
                <div className="active-topic__text">
                    {text}
                </div>
                {
                    formShowing ? <div className="active-topic__user">Автор темы: {user}</div> : null
                }
                {/* <div className="active-topic__user">Автор темы: {user}</div> */}
                <p className={mes.length ? "active-topic__comments active" : "active-topic__comments"}>Коментарии:</p>
                <Messages messages={mes} />
                {
                    formShowing ? <Form 
                        name={name}
                        setName={setName}
                        comment={comment}
                        setComment={setComment}
                        addComment={addComment}
                    /> : null
                }
            </div>
        </main>
    );
}

export { TopicActive };