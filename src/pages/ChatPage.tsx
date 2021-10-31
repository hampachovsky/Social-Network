import Message from './Message/';
import React from 'react';
import style from './ChatPage.module.css';
import { SendMessagesForm } from './SendMessageForm';

let ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

export const ChatPage: React.FC = () => {
  return (
    <div className={style.chatPageContainer}>
      <Chat />
      <SendMessagesForm />
    </div>
  );
};

const Chat: React.FC = () => {
  const messages = [1, 2, 3, 4, 7, 8, 9];

  return (
    <div style={{ height: '500px', overflowY: 'auto' }}>
      {messages.map((it, index) => {
        return (
          <Message
            message={'q'}
            owner={false}
            photoUrl={
              'https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012'
            }
            key={it}
          />
        );
      })}
    </div>
  );
};

export default ChatPage;
