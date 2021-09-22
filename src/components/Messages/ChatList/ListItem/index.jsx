import React from 'react';
import style from './ListItem.module.css';

const ListItem = (props) => {
  return (
    <div className="block flex items-center py-3 px-4 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <img
        className={style.avaImage}
        src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012"
        alt=""
      />
      <p>{`${props.username}:  ${props.message}`}</p>
    </div>
  );
};

export default ListItem;
