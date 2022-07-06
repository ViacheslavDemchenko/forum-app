import './App.css';

import topics from './topics.json';

import { useState, useEffect } from 'react';

import { TopicsList } from './components/TopicsList/TopicsList';
import { TopicActive } from './components/TopicActive/TopicActive';
import { NewTopic } from './components/NewTopic/NewTopic';
import { Overlay } from './components/Overlay/Overlay';


function App() {
  const [topicsList, setTopicsList] = useState([]);
  const [activeTopic, setActiveTopic] = useState([]);
  const [formShowing, setFormShowing] = useState(false);
  const [newTopic, setNewTopic] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicText, setNewTopicText] = useState('');
  const [newTopicUser, setNewTopicUser] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setTopicsList(topics);
  }, []);

  const topicRead = (id) => {
    const activeTopic = topicsList.find(el => el.id === id);
    setActiveTopic(activeTopic);
    setComments(activeTopic.comments);
  }

  const newTopicOpen = () => {
    setNewTopic(!newTopic);
    setOverlay(!overlay);
  }

  const newTopicClose = () => {
    setNewTopic(!newTopic);
    setOverlay(!overlay);
  }

  const newTopicAdd = (newTopicTitle, newTopicText, newTopicUser, data, dateTime) => {
    setTimeout(() => {
      setNewTopic(!newTopic);
      setOverlay(!overlay);
    }, 500);

    const newTopic = {
      id: data,
      title: newTopicTitle,
      text: newTopicText,
      user: newTopicUser,
      time: dateTime,
      comments: []
    }

    setTopicsList([newTopic, ...topicsList]);
  }

  const addComment = (name, comment) => {
    // Переменная для получения обновленного списка комментариев в активной теме
    let commentAdd;

    const commentsAdd = topicsList.map(el => { // Перебираем массив записей
      if(el.id === activeTopic.id) { // Находим нужную запись по id
        const newComment = {
          user: name,
          text: comment
        }

        // Получаем обновленый список комментариев в активной теме
        commentAdd = [newComment, ...comments];

        return {
            ...el, // Оставляем нетронутыми все данные записи
            // Добавляем новый комментарий в ячейку таблицы "Количество сообщений" в блоке "Темы"
            comments: [newComment, ...comments], 
        }
      } else {
          return el; // В противном случае просто возвращаем запись
      }
    });

    // Обновляем число комментариев в ячейке таблицы "Количество сообщений" в блоке "Темы"
    setTopicsList(commentsAdd); 

    // Добавляем новый комментарий в список комментариев в активной теме
    setComments(commentAdd);
  }

  return (
    <div className="App">
      <h1 className="App__title">Forum - React app</h1>
      <div className="container">
        <div className="App__inner">
          <TopicsList 
            topicsList={topicsList}
            topicRead={topicRead}
            setFormShowing={setFormShowing}
            newTopicOpen={newTopicOpen}
          />
          <TopicActive 
            activeTopic={activeTopic}
            formShowing={formShowing}
            name={name}
            setName={setName}
            comment={comment}
            setComment={setComment}
            addComment={addComment}
            comments={comments}
          />
          <NewTopic 
            setNewTopic={setNewTopic}
            newTopic={newTopic}
            newTopicClose={newTopicClose}
            newTopicAdd={newTopicAdd}
            newTopicTitle={newTopicTitle}
            newTopicText={newTopicText}
            newTopicUser={newTopicUser}
            setNewTopicTitle={setNewTopicTitle}
            setNewTopicText={setNewTopicText}
            setNewTopicUser={setNewTopicUser}
          />
          <Overlay 
            overlay={overlay}
            newTopic={newTopic}
            newTopicClose={newTopicClose}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
