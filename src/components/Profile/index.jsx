import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/index';

const Profile = ({ status, profile, updateUserStatus, isOwner, setUserPhoto, saveProfile }) => {
  return (
    <div className={style.profileContainer}>
      <ProfileInfo
        saveProfile={saveProfile}
        setUserPhoto={setUserPhoto}
        isOwner={isOwner}
        status={status}
        profile={profile}
        updateUserStatus={updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
