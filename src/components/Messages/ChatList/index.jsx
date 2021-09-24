import React from 'react';
import style from './ChatList.module.css';
import ListItem from './ListItem/index';

const ChatList = () => {
  return (
    <div className={style.chatList}>
      <div className={style.searchBarContainer}>
        <div>
          <input
            className={style.searchBar}
            type="text"
            placeholder="Search: "
          />
        </div>
      </div>
      <div className={style.listItems}>
        <ListItem userId="1" username="user1" message="helo world!" />
        <ListItem userId="2" username="user2" message="test world!" />
        <ListItem userId="3" username="user3" message="world!" />
      </div>
    </div>
  );
};

export default ChatList;
