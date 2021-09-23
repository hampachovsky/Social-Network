import React from 'react';
import style from './ListItem.module.css';
import { NavLink } from 'react-router-dom';

const ListItem = (props) => {
  return (
    <NavLink to={`/messages/${props.userId}`}>
      <div className="block flex items-center py-3 px-4 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700">
        <img
          className={style.avaImage}
          src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012"
          alt=""
        />
        <p>{`${props.username}:  ${props.message}`}</p>
      </div>
    </NavLink>
  );
};

export default ListItem;
