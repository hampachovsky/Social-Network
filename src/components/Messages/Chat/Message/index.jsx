import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
  return (
    <div className="flex lg:items-center">
      <img
        className={style.avaImage}
        src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012"
        alt=""
      />
      <p>{`${props.username}: ${props.message}`}</p>
    </div>
  );
};

export default Message;
