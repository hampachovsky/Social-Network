import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/index';

const Profile = (props) => {
  return (
    <div className={style.profileContainer}>
      <ProfileInfo
        status={props.status}
        profile={props.profile}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
