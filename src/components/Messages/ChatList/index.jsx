import React from 'react';
import style from './ChatList.module.css';
import ListItem from './ListItem/index';

const ChatList = () => {
  return (
    <div className={style.chatList}>
      <input
        type="text"
        placeholder="Search: "
        className="border-b px-4 py-4 dark:border-gray-600"
      />
      <ListItem username="user1" message="helo world!" />
      <ListItem username="user2" message="test world!" />
    </div>
  );
};

export default ChatList;
