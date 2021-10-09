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
        <p className={style.aboutMe}>About me: {props.profile.aboutMe}</p>
        <ProfileStatus updateUserStatus={props.updateUserStatus} status={props.status} />
        {props.profile.lookingForAJob ? (
          <div className={style.jobDescriptionContainer}>
            <p className={style.jobFindStatus}>Work: in active search</p>
            <p className={style.jobFindDescription}>
              Description: {props.profile.lookingForAJobDescription}
            </p>
          </div>
        ) : (
          <p className={style.jobFindStatus}>Work: in active search</p>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
