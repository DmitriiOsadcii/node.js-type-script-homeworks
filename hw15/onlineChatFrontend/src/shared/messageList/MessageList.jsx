

import styles from "./MessageList.module.css"

const MessagesList = ({ items = [] }) => {


    const elements = items.map((msg, idx) => (
        <li key={idx}>
            <p>{msg.author}: {msg.text}</p>
        </li>
    ));

    return (
        <div className={styles.messagesBox}>
            {!items?.length && <p>Уведомлений нет</p>}
            <ul>{elements}</ul>
        </div>
    )
};

export default MessagesList;