import React from 'react';
import ProfileInfo from './ProfileInfo/index';
import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

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
