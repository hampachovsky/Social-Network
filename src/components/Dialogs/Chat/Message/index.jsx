import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
  return (
    <div className={style.message}>
      <div className={style.avaContainer}>
        <img className={style.avaImage} src={props.avaImg} alt="" />
      </div>
      <div className={style.messageText}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Message;
