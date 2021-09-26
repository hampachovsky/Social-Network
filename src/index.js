import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import reportWebVitals from './reportWebVitals';

const postData = [
  { message: 'Hi, man', likeCount: '1' },
  { message: 'Hi, guys', likeCount: '4' },
  { message: "Hi, i'ts me", likeCount: '5' },
  { message: "I'm here", likeCount: '51' },
];

const userData = [
  {
    username: 'user1',
    userId: '1',
    message: 'hello world',
    status: 'online',
  },
  {
    username: 'user2',
    userId: '2',
    message: 'test world!',
    status: 'online',
  },
  {
    username: 'user3',
    userId: '3',
    message: 'world',
    status: 'online',
  },
  {
    username: 'user4',
    userId: '4',
    message: 'message world',
    status: 'offline',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} userData={userData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
