import React from 'react';
import style from './Chat.module.css';
import Message from './Message/index';

const Chat = (props) => {
  debugger;
  const messageElement = props.state.userData[0].messages.map((m) => (
    <Message
      username={props.state.userData[0].username}
      message={m.content}
      owner={m.owner}
      avaImg={props.state.userData[0].avaImg}
    />
  ));

  const onAddMessage = () => {
    props.onAddMessage();
  };

  const onNewMessageTextChange = (e) => {
    let body = e.target.value;
    props.onNewMessageTextChange(body);
  };

  return (
    <div className={style.chatContainer}>
      <div className={style.chatHeader}>
        <div className={style.chatHeaderItem}>
          <div className={style.avaImageContainer}>
            <img className={style.avaImage} src={props.state.userData[1].avaImg} alt="" />
          </div>
          <div className={style.chatHeaderInfo}>
            <h4 className={style.username}>{`${props.state.userData[0].username}`}</h4>
            <p className={style.status}>{`is ${props.state.userData[0].status}`}</p>
          </div>
        </div>
      </div>
      <div>
        <div>{messageElement}</div>
        <div className={style.chatFooter}>
          <textarea
            onChange={onNewMessageTextChange}
            value={props.newMessageBody}
            className={style.textarea}
            placeholder="Your message"
            name=""
            id=""
            cols="50"
            rows="3"
          ></textarea>
          <div className={style.sendBtnContainer}>
            <button onClick={onAddMessage} className={style.sendBtn} type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
