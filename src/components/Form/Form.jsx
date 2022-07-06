import './Form.css';

const Form = ({name, setName, comment, setComment, addComment}) => {

    const nameHandle = e => {
        setName(e.target.value);
    }

    const commentHandle = e => {
        setComment(e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();

        if (name !== '' && comment !== '') {
            addComment(name, comment);

            setTimeout(() => {
                setName('');
                setComment('');
            }, 500);
        } else {
            alert('Заполните все поля формы');
        }
    }

    return(
        <form className="active-topic__form">
            <div className="active-topic__user">
                <p>Введите имя</p>
                <input 
                    type="text"
                    value={name}
                    onChange={e =>nameHandle(e)}
                />
            </div>
            <div className="active-topic__message">
                <p>Введите текст сообщения</p>
                <textarea 
                    value={comment}
                    onChange={e => commentHandle(e)}
                />
            </div>
            <button 
                className="btn active-topic__form-btn"
                onClick={e => formSubmit(e)}
            >
                Опубликовать комментарий
            </button>
        </form> 
    );
}

export { Form };