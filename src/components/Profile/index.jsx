import React from 'react';
import MyPosts from './MyPosts/';
import ProfileInfo from './ProfileInfo/index';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={style.profileContainer}>
      <ProfileInfo />
      <MyPosts
        postsData={props.state.postData}
        postValue={props.state.postValue}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
