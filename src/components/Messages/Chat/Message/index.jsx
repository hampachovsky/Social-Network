import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
  return (
    <div className={style.message}>
      <div className={style.avaContainer}>
        <img
          className={style.avaImage}
          src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012"
          alt=""
        />
      </div>
      <div className={style.messageText}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Message;
