import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
  return (
    <div>
      {props.owner ? (
        <div className={style.ownerMessage}>
          <div className={style.avaOwnerContainer}>
            <img className={style.avaOwnerImage} src={props.avaImg} alt="" />
          </div>
          <div className={style.ownerMessageText}>
            <p className={style.leading}>{props.message}</p>
          </div>
        </div>
      ) : (
        <div className={style.message}>
          <div className={style.avaContainer}>
            <img className={style.avaImage} src={props.avaImg} alt="" />
          </div>
          <div className={style.messageText}>
            <p className={style.leading}>{props.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
