import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012 "
        alt=""
      />
      {props.message}
      <br />
      Like: {props.likeCount}
    </div>
  );
};

export default Post;
