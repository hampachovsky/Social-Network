import React from 'react';
import style from './Dialogs.module.css';
import ChatContainer from './Chat/ChatContainer';
import ChatListContainer from './ChatList/ChatListContainer';

const Dialogs = (props) => {
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
