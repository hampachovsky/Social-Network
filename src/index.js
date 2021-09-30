import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './redux/state';
import App from 'App';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addMessage={store.addMessage.bind(store)}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          updateNewMessageText={store.updateNewMessageText.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
