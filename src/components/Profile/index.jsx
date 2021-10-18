import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/index';

const Profile = ({ status, profile, updateUserStatus }) => {
  return (
    <div className={style.profileContainer}>
      <ProfileInfo status={status} profile={profile} updateUserStatus={updateUserStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
