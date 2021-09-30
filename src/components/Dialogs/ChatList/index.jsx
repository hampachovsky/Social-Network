import React from 'react';
import style from './ChatList.module.css';
import ListItem from './ListItem/index';

const ChatList = (props) => {
  const listElement = props.userData.map((u) => (
    <ListItem
      userId={u.userId}
      username={u.username}
      message={u.messages[0].content}
      avaImg={u.avaImg}
    />
  ));
  return (
    <div className={style.chatList}>
      <div className={style.searchBarContainer}>
        <div>
          <input className={style.searchBar} type="text" placeholder="Search: " />
        </div>
      </div>
      <div className={style.listItems}>{listElement}</div>
    </div>
  );
};

export default ChatList;
