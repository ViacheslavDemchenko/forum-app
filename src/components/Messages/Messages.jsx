import './Messages.css';

import { Message } from '../Message/Message';

const Messages = ({messages}) => {

    return(
        <>
            {
                messages.length ? messages.map((item, i) =>{
                    return <Message key={i} {...item} />
                }) : null
            }
        </>
    );
}

export { Messages };