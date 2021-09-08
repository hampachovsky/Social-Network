import React from 'react';
import style from './Profile.module.css';

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
      <div>
        My posts
        <div>New post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
