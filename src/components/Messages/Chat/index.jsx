import React from 'react';
import style from './Chat.module.css';
import Message from './Message/index';

const Chat = (props) => {
  return (
    <div
      className={`lg:w-8/12 bg-white dark:bg-gray-800 ${style.chatContainer}`}
    >
      <div className="px-5 py-4 flex uk-flex-between">
        <div className="flex items-center space-x-3">
          <img
            className={style.avaImage}
            src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012"
            alt=""
          />
          <div className="flex-1 min-w-0 relative text-gray-500">
            <h4 className="font-semibold text-black text-lg">{`${props.username}`}</h4>
            <p className="font-semibold leading-3 text-green-500 text-sm">{`is ${props.online}`}</p>
          </div>
        </div>
      </div>
      <div className="border-t dark:border-gray-600">
        <div className="lg:p-8 p-4 space-y-5">
          <Message username={props.username} message={props.message} />
        </div>
        <div className="border-t flex p-6 dark:border-gray-700">
          <textarea
            className="border-0 flex-1 h-10 min-h-0 resize-none min-w-0 shadow-none dark:bg-transparent"
            placeholder="Your message"
            name=""
            id=""
            cols="50"
            rows="3"
          ></textarea>
          <div className="flex h-full space-x-2">
            <button
              className="bg-blue-600 font-semibold px-6 py-2 rounded-md text-white"
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
