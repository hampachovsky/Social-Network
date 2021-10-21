import Preloader from 'components/common/Preloader';
import React, { useState } from 'react';
import userPhoto from '../../../assets/images/user_img.png';
import style from './ProfileInfo.module.css';
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  if (!props.profile) return <Preloader />;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      {props.isOwner && (
        <div className={style.editBtnContainer}>
          <button disabled={editMode} onClick={toggleEditMode} className={style.editBtn}>
            Edit Profile
          </button>
        </div>
      )}
      <div className={style.profileContainer}>
        <div className={style.profileImageContainer}>
          <img
            className={style.profileImage}
            src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
            alt=""
          />
        </div>
        <div className={style.infoContainer}>
          {editMode ? (
            <ProfileDataForm
              profile={props.profile}
              status={props.status}
              updateUserStatus={props.updateUserStatus}
              setUserPhoto={props.setUserPhoto}
              saveProfile={props.saveProfile}
              toggleEditMode={toggleEditMode}
            />
          ) : (
            <ProfileData profile={props.profile} status={props.status} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
