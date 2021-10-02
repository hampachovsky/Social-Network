import React from 'react';
import { sendMessageActionCreator, updateMessageBodyCreator } from 'redux/dialogs_reducer';
import Chat from '.';
import StoreContext from 'StoreContext';

const ChatContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage;
        const onAddMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const onNewMessageTextChange = (text) => {
          store.dispatch(updateMessageBodyCreator(text));
        };

        return (
          <Chat
            onAddMessage={onAddMessage}
            onNewMessageTextChange={onNewMessageTextChange}
            newMessageBody={state.newMessageBody}
            state={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default ChatContainer;
