import React from 'react';
import style from './Message.module.css';

type PropsType = {
  photoUrl: string;
  message: string;
  owner: boolean;
};

const Message: React.FC<PropsType> = ({ photoUrl, message, owner }) => {
  return (
    <div>
      {owner ? (
        <div className={style.ownerMessage}>
          <div className={style.avaOwnerContainer}>
            <img className={style.avaOwnerImage} src={photoUrl} alt="" />
          </div>
          <div className={style.ownerMessageText}>
            <p className={style.leading}>{message}</p>
          </div>
        </div>
      ) : (
        <div className={style.message}>
          <div className={style.avaContainer}>
            <img className={style.avaImage} src={photoUrl} alt="" />
          </div>
          <div className={style.messageText}>
            <p className={style.leading}>{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
