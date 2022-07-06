import './Overlay.css';

const Overlay = ({newTopic, newTopicClose}) => {
    return(
        <>
            {
                <div 
                    onClick={() => newTopicClose()}
                    className={newTopic ? "overlay active" : "overlay"}>
                </div>
            }
        </>
    );
}

export { Overlay };