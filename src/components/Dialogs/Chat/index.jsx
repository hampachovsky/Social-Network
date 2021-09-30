import React from 'react';
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from 'redux/state';
import style from './Chat.module.css';
import Message from './Message/index';

const Chat = (props) => {
  const messageElement = props.messages.map((m) => (
    <Message
      username={props.username}
      message={m.content}
      owner={m.owner}
      avaImg={props.avaImg}
    />
  ));

  const newMessage = React.createRef();

  const addMessage = () => {
    let action = addMessageActionCreator();
    props.dispatch(action);
  };

  const onMessageTextChange = () => {
    let newText = newMessage.current.value;
    let action = updateMessageTextActionCreator(newText);
    props.dispatch(action);
    newMessage.current.value = props.messageValue;
  };

  return (
    <div className={style.chatContainer}>
      <div className={style.chatHeader}>
        <div className={style.chatHeaderItem}>
          <div className={style.avaImageContainer}>
            <img className={style.avaImage} src={props.avaImg} alt="" />
          </div>
          <div className={style.chatHeaderInfo}>
            <h4 className={style.username}>{`${props.username}`}</h4>
            <p className={style.status}>{`is ${props.status}`}</p>
          </div>
        </div>
      </div>
      <div>
        <div>{messageElement}</div>
        <div className={style.chatFooter}>
          <textarea
            onChange={onMessageTextChange}
            value={props.messageValue}
            ref={newMessage}
            className={style.textarea}
            placeholder="Your message"
            name=""
            id=""
            cols="50"
            rows="3"
          ></textarea>
          <div className={style.sendBtnContainer}>
            <button
              onClick={addMessage}
              className={style.sendBtn}
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
