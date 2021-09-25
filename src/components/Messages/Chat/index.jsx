import React from 'react';
import style from './Chat.module.css';
import Message from './Message/index';

const Chat = (props) => {
  return (
    <div className={style.chatContainer}>
      <div className={style.chatHeader}>
        <div className={style.chatHeaderItem}>
          <div className={style.avaImageContainer}>
            <img
              className={style.avaImage}
              src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012"
              alt=""
            />
          </div>
          <div className={style.chatHeaderInfo}>
            <h4 className={style.username}>{`${props.username}`}</h4>
            <p className={style.status}>{`is ${props.status}`}</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Message username={props.username} message={props.message} />
          <Message username={props.username} message={props.message} />
          <Message username={props.username} message={props.message} />
          <Message username={props.username} message={props.message} />
        </div>
        <div className={style.chatFooter}>
          <textarea
            className={style.textarea}
            placeholder="Your message"
            name=""
            id=""
            cols="50"
            rows="3"
          ></textarea>
          <div className={style.sendBtnContainer}>
            <button className={style.sendBtn} type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
