import './TopicsList.css';

import { TopicsItem } from '../TopicsItem/TopicsItem';

const TopicsList = ({topicsList, topicRead, setFormShowing, newTopicOpen}) => {

    return(
        <aside className="topics">
            <h2>Темы</h2>
            <button 
                className="btn topics__btn"
                onClick={() => newTopicOpen()}
            >
                Создать тему
            </button>
            <table className="topics__top">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Количество сообщений</th>
                        <th>Дата создания</th>
                        <th>Автор</th>
                    </tr>
                </thead>
                <tbody className="topics__list">
                    {
                        topicsList.length ? topicsList.map( item => {
                            return <TopicsItem 
                                key={item.id}
                                {...item}
                                topicRead={topicRead}
                                setFormShowing={setFormShowing}
                            />
                        }) : null
                    }
                </tbody>
            </table>
        </aside>
    );
}

export { TopicsList };