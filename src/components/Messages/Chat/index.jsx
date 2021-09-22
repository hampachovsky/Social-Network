import React from 'react';
import style from './Chat.module.css';

const Chat = (props) => {
  return (
    <div className={style.chatContainer}>
      <div className="flex lg:items-center">
        <img
          className={style.avaImage}
          src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012"
          alt=""
        />
        <p>{`${props.username}: ${props.message}`}</p>
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
  );
};

export default Chat;
