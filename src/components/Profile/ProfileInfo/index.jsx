import Preloader from 'components/common/Preloader';
import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;
  return (
    <div className={style.profileContainer}>
      <div className={style.profileImageContainer}>
        <img className={style.profileImage} src={props.profile.photos.large} alt="" />
      </div>
      <div className={style.infoContainer}>
        <h2 className={style.fullName}>{props.profile.fullName}</h2>
        <p className={style.aboutMe}>{props.profile.aboutMe}</p>
        {props.profile.lookingForAJob ? (
          <div className={style.jobDescriptionContainer}>
            <p className={style.jobFindStatus}>Работа: В активном поиске</p>
            <p className={style.jobFindDescription}>
              Описание: {props.profile.lookingForAJobDescription}
            </p>
          </div>
        ) : (
          <p className={style.jobFindStatus}>Работа: В активном поиске</p>
        )}

        <p>{props.profile.lookingForAJob}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
