import React from 'react';
import ProfileInfo from './ProfileInfo/index';
import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <div className={style.profileContainer}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
