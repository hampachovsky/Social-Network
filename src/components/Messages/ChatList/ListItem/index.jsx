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
        <img
          className={style.avaImage}
          src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012"
          alt=""
        />
      </div>
      <div className={style.listItemInfo}>
        <h4 className={style.username}>{props.username}</h4>
        <p className={style.message}>{props.message}</p>
      </div>
    </NavLink>
  );
};

export default ListItem;
