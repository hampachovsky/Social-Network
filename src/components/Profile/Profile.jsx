import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={style.content}>
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
