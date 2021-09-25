import React from 'react';
import style from './Messages.module.css';
import ChatList from './ChatList/index';
import Chat from './Chat/index';

const Messages = () => {
  const userData = [
    {
      username: 'user1',
      userId: '1',
      message: 'hello world',
      status: 'online',
    },
    {
      username: 'user2',
      userId: '2',
      message: 'test world!',
      status: 'online',
    },
    {
      username: 'user3',
      userId: '3',
      message: 'world',
      status: 'online',
    },
    {
      username: 'user4',
      userId: '4',
      message: 'message world',
      status: 'offline',
    },
  ];

  return (
    <div>
      <div>
        <h1>Messages</h1>
      </div>
      <div>
        <div className={style.chatContainer}>
          <ChatList userData={userData} />
          <Chat
            username={userData[0].username}
            status={userData[0].status}
            message={userData[0].message}
          />
        </div>
      </div>
    </div>
  );
};

export default Messages;
