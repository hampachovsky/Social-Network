import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
  const postElements = props.postsData.map((p) => (
    <Post text={p.text} likeCount={p.likeCount} />
  ));

  const newPost = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
    newPost.current.value = props.postValue;
  };

  return (
    <div className={style.posts}>
      <div className={style.postField}>
        <textarea
          onChange={onPostChange}
          value={props.postValue}
          ref={newPost}
          name=""
          id=""
          cols="50"
          rows="2"
        />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={style.posts}>
        <div className={style.myPosts}>My posts</div>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
