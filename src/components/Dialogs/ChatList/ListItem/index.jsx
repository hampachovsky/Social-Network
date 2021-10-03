import React from 'react';
import style from './ListItem.module.css';
import { NavLink } from 'react-router-dom';

const ListItem = (props) => {
  return (
    <NavLink
      activeClassName={style.active}
      className={style.listItem}
      to={`/messages/${props.userId}`}
    >
      <div className={style.avaImageContainer}>
        <img className={style.avaImage} src={props.photoUrl} alt="" />
      </div>
      <div className={style.listItemInfo}>
        <h4 className={style.username}>{props.username}</h4>
        <p className={style.message}>hello world, soon...</p>
      </div>
    </NavLink>
  );
};

export default ListItem;
