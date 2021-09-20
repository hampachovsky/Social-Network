import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
  return (
    <div className={style.posts}>
      My posts
      <Post message="Hi, man" likeCount="1" />
      <Post message="Hi, guys" likeCount="4" />
      <Post message="Hi, i'ts me" likeCount="5" />
    </div>
  );
};

export default MyPosts;
