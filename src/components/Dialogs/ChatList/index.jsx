import React, { useState } from 'react';
import style from './ChatList.module.css';
import ListItem from './ListItem/index';

const ChatList = (props) => {
  const [query, setQuery] = useState('');
  const listElement = props.dialogsPage.userData.map((u) => (
    <ListItem key={u.userId} userId={u.userId} username={u.username} photoUrl={u.photoUrl} />
  ));
  return (
    <div className={style.chatList}>
      <div className={style.searchBarContainer}>
        <div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className={style.searchBar}
            type="text"
            placeholder="Search: "
          />
        </div>
      </div>
      <div className={style.listItems}>{listElement}</div>
    </div>
  );
};

export default ChatList;
