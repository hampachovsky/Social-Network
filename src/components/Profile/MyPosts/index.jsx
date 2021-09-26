import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
  const postElements = props.postsData.map((p) => (
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
