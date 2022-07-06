import './NewTopic.css';

import { useEffect } from 'react';

const NewTopic = (
    {
        newTopic, 
        newTopicClose, 
        newTopicAdd, 
        newTopicTitle, 
        newTopicText, 
        newTopicUser,
        setNewTopicTitle,
        setNewTopicText,
        setNewTopicUser
    }) => {

useEffect(() => {
    if (newTopic) {
        const body = document.body;
        let div = document.createElement('div');
        div.style.width = `${50}px`;
        div.style.height = `${50}px`;
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        body.appendChild(div);
        // Полная ширина экрана минус ширина экрана без прокрутки
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        body.style.overflow = 'hidden';
        body.style.marginRight = `${scrollWidth}px`;
    } else {
        const body = document.body;
        body.style.overflow = '';
        body.style.marginRight = `${0}px`;
    }
}, [newTopic]);

    const data = new Date().getTime();

    const newTopicTitleHandle = e => {
        // console.log(e.target.value);
        setNewTopicTitle(e.target.value);
    }

    const newTopicTextHandle = e => {
        setNewTopicText(e.target.value);
    }

    const newTopicUserHandle = e => {
        setNewTopicUser(e.target.value);
    }

    const newTopicSubmit = e => {
        e.preventDefault();

        const date = new Date().toLocaleDateString();
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        const time =  `${zeroAdd(hours)}:${zeroAdd(minutes)}`;;
        const dateTime = `${date} ${time}`;

        if (newTopicTitle && newTopicText && newTopicUser && data && dateTime) {
            newTopicAdd(newTopicTitle, newTopicText, newTopicUser, data, dateTime);
            setNewTopicTitle('');
            setNewTopicText('');
            setNewTopicUser('');
        } else {
            alert('Заполните все поля формы');
        }
    }

    const zeroAdd = num => {
        if (num < 10) {
            num = '0' + num;
        }

        return num;
    }

    return(
        <div className={newTopic ? "newtopic active" : "newtopic"}>
            <h2>Новая тема</h2>
            <span 
                className="newtopic__close"
                onClick={() => newTopicClose()}
            >
                X
            </span>
            <form className="newtopic__form">
                <input 
                    type="text"
                    className="newtopic__title"
                    placeholder="Введите название темы"
                    value={newTopicTitle}
                    onChange={e => newTopicTitleHandle(e)}
                />
                <textarea 
                    placeholder="Введите текст"
                    value={newTopicText}
                    onChange={e => newTopicTextHandle(e)}
                />
                <input 
                    type="text"
                    className="newtopic__user"
                    placeholder="Имя пользователя"
                    value={newTopicUser}
                    onChange={e => newTopicUserHandle(e)}
                />
                <button 
                    className="btn newtopic__btn"
                    onClick={e => newTopicSubmit(e)}
                >
                    Создать новую тему
                </button>
            </form>
        </div> 
    );
}

export { NewTopic };