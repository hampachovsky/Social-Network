import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={style.profileImage}
          src="https://www.gettyimages.fr/gi-resources/images/500px/983841598.jpg"
          alt=""
        />
      </div>
      <div>Ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
