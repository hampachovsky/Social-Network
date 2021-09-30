import React from 'react';
import style from './Dialogs.module.css';
import ChatList from './ChatList/index';
import Chat from './Chat/index';

const Dialogs = (props) => {
  return (
    <div>
      <div>
        <h1>Dialogs</h1>
      </div>
      <div>
        <div className={style.chatContainer}>
          <ChatList userData={props.state.userData} />
          <Chat
            addMessage={props.addMessage}
            username={props.state.userData[0].username}
            status={props.state.userData[0].status}
            messages={props.state.userData[0].messages}
            avaImg={props.state.userData[0].avaImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
