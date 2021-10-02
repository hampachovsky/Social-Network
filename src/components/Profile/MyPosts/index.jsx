import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
  const postElements = props.postsData.map((p) => <Post text={p.text} likeCount={p.likeCount} />);

  const onAddPost = () => {
    props.onAddPost();
  };

  const onPostChange = (e) => {
    let newText = e.target.value;
    props.upateNewPostText(newText);
  };

  return (
    <div className={style.posts}>
      <div className={style.postField}>
        <textarea
          onChange={onPostChange}
          value={props.postValue}
          name=""
          id=""
          cols="50"
          rows="2"
        />
        <button onClick={onAddPost}>Add Post</button>
      </div>
      <div className={style.posts}>
        <div className={style.myPosts}>My posts</div>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
