import Preloader from 'components/common/Preloader';
import React from 'react';
import style from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user_img.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;
  return (
    <div className={style.profileContainer}>
      <div className={style.profileImageContainer}>
        <img
          className={style.profileImage}
          src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
          alt=""
        />
      </div>
      <div className={style.infoContainer}>
        <h2 className={style.fullName}>{props.profile.fullName}</h2>
        <ProfileStatus status={props.profile.aboutMe} />
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
