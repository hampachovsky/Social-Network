import React from 'react';
import MyPosts from './MyPosts/';

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.gettyimages.fr/gi-resources/images/500px/983841598.jpg"
          alt=""
        />
      </div>
      <div>Ava + desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
