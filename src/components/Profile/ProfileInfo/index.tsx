import Preloader from 'components/common/Preloader';
import React, { useState } from 'react';
import userPhoto from '../../../assets/images/user_img.png';
import style from './ProfileInfo.module.css';
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';
import { ProfileType } from 'types/types';

type PropsType = {
  profile: ProfileType | null;
  status: string;
  isOwner: boolean;
  updateUserStatus: (status: string) => void;
  setUserPhoto: (file: any) => void;
  saveProfile: (profile: ProfileType) => void;
};

const ProfileInfo: React.FC<PropsType> = ({
  profile,
  isOwner,
  status,
  updateUserStatus,
  setUserPhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) return <Preloader />;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      {isOwner && (
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
            src={profile.photos.large ? profile.photos.large : userPhoto}
            alt=""
          />
        </div>
        <div className={style.infoContainer}>
          {editMode ? (
            <ProfileDataForm
              profile={profile}
              status={status}
              updateUserStatus={updateUserStatus}
              setUserPhoto={setUserPhoto}
              saveProfile={saveProfile}
              toggleEditMode={toggleEditMode}
            />
          ) : (
            <ProfileData profile={profile} status={status} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
