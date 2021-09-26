import React from 'react';
import MyPosts from './MyPosts/';
import ProfileInfo from './ProfileInfo/index';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.postData} />
    </div>
  );
};

export default Profile;
