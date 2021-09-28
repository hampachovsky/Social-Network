import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
  const postElements = props.postsData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  return (
    <div className={style.posts}>
      <div className={style.postField}>
        <textarea name="" id="" cols="50" rows="2"></textarea>
        <button>Add Post</button>
      </div>
      <div className={style.posts}>
        <div className={style.myPosts}>My posts</div>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
