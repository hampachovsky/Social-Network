import React from 'react';
import style from './Messages.module.css';
import ChatList from './ChatList/index';
import Chat from './Chat/index';

const Messages = () => {
  return (
    <div>
      <div>
        <h1>Messages</h1>
      </div>
      <div>
        <div className={style.chatContainer}>
          <ChatList />
          <Chat username="user1" online="online" message="hello world!" />
        </div>
      </div>
    </div>
  );
};

export default Messages;
