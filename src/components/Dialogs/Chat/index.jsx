import React from 'react';
import style from './Chat.module.css';
import Message from './Message/index';

const Chat = (props) => {
  const filtred = props.dialogsPage.messages.filter((m) => m.author == 'user1');
  const messageElement = filtred.map((m, i) => (
    <Message
      username={props.dialogsPage.userData[0].username}
      message={m.content}
      owner={m.owner}
      photoUrl={props.dialogsPage.userData[0].photoUrl}
      key={i}
    />
  ));

  const onSendMessage = () => {
    props.onSendMessage();
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
            <img className={style.avaImage} src={props.dialogsPage.userData[1].photoUrl} alt="" />
          </div>
          <div className={style.chatHeaderInfo}>
            <h4 className={style.username}>{`${props.dialogsPage.userData[0].username}`}</h4>
            <p className={style.status}>{`is ${props.dialogsPage.userData[0].status}`}</p>
          </div>
        </div>
      </div>
      <div>
        <div>{messageElement}</div>
        <div className={style.chatFooter}>
          <textarea
            onChange={onNewMessageTextChange}
            value={props.dialogsPage.newMessageBody}
            className={style.textarea}
            placeholder="Your message"
            name=""
            id=""
            cols="50"
            rows="3"
          ></textarea>
          <div className={style.sendBtnContainer}>
            <button onClick={onSendMessage} className={style.sendBtn} type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
