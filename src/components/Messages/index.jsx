import React from 'react';
import style from './Messages.module.css';
import ChatList from './ChatList/index';
import Chat from './Chat/index';

const Messages = () => {
  return (
    <div>
      <div>
        <h1 className="font-semibold lg:mb-6 mb-3 text-2xl">Messages</h1>
      </div>
      <div className="lg:flex lg:shadow lg:bg-white lg:space-y-0 space-y-8 rounded-md lg:-mx-0 -mx-5 overflow-hidden lg:dark:bg-gray-800">
        <div className={style.chatContainer}>
          <ChatList />
          <Chat username="user1" message="helo world!" />
        </div>
      </div>
    </div>
  );
};

export default Messages;
