import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
  const postData = [
    { message: 'Hi, man', likeCount: '1' },
    { message: 'Hi, guys', likeCount: '4' },
    { message: "Hi, i'ts me", likeCount: '5' },
    { message: "I'm here", likeCount: '51' },
  ];

  const postElements = postData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  return (
    <div className={style.posts}>
      My posts
      {postElements}
    </div>
  );
};

export default MyPosts;
