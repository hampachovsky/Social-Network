import React from 'react';
import StoreContext from 'StoreContext';
import ChatList from '.';

const ChatListContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage.userData;
        return <ChatList userData={state} />;
      }}
    </StoreContext.Consumer>
  );
};

export default ChatListContainer;
