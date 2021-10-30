import React from 'react';
import Chat from './Chat';
import { ChatList } from './ChatList';
import style from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div>
      <div>
        <h1>Dialogs</h1>
      </div>
      <div>
        <div className={style.chatContainer}>
          <ChatList />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
