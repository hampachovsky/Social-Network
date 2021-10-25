import React from 'react';
import style from './ListItem.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  userId: string;
  photoUrl: string;
  username: string;
};

const ListItem: React.FC<PropsType> = ({ userId, photoUrl, username }) => {
  return (
    <NavLink activeClassName={style.active} className={style.listItem} to={`/messages/${userId}`}>
      <div className={style.avaImageContainer}>
        <img className={style.avaImage} src={photoUrl} alt="" />
      </div>
      <div className={style.listItemInfo}>
        <h4 className={style.username}>{username}</h4>
        <p className={style.message}>hello world, soon...</p>
      </div>
    </NavLink>
  );
};

export default ListItem;
