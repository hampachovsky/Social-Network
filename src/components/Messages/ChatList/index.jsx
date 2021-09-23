import React from 'react';
import style from './ChatList.module.css';
import ListItem from './ListItem/index';

const ChatList = () => {
  return (
    <div className="lg:w-4/12 bg-white border-r overflow-hidden dark:bg-gray-800 dark:border-gray-600">
      <div className="border-b px-4 py-4 dark:border-gray-600">
        <div className="bg-gray-100 input-with-icon rounded-md dark:bg-gray-700">
          <input
            type="text"
            placeholder="Search: "
            className=" bg-transparent max-h-10 h-8 p-3 shadow-none"
          />
        </div>
      </div>
      <div className="pb-16 w-full">
        <ListItem userId="1" username="user1" message="helo world!" />
        <ListItem userId="2" username="user2" message="test world!" />
        <ListItem userId="3" username="user3" message="world!" />
      </div>
    </div>
  );
};

export default ChatList;
