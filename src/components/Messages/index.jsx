import React from 'react';
import style from './Messages.module.css';
import ChatList from './ChatList/index';
import Chat from './Chat/index';

const Messages = (props) => {
  return (
    <div>
      <div>
        <h1>Messages</h1>
      </div>
      <div>
        <div className={style.chatContainer}>
          <ChatList userData={props.userData} />
          <Chat
            username={props.userData[0].username}
            status={props.userData[0].status}
            message={props.userData[0].message}
          />
        </div>
      </div>
    </div>
  );
};

export default Messages;
