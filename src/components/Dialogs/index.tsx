import React from 'react';
import ChatContainer from './Chat/ChatContainer';
import ChatListContainer from './ChatList/ChatListContainer';
import style from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div>
      <div>
        <h1>Dialogs</h1>
      </div>
      <div>
        <div className={style.chatContainer}>
          <ChatListContainer />
          <ChatContainer />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
