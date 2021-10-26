import React from 'react';
import { ProfileType } from 'types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/index';

type PropsType = {
  profile: ProfileType | null;
  status: string;
  isOwner: boolean;
  updateUserStatus: (status: string) => void;
  setUserPhoto: (file: any) => void;
  saveProfile: (profile: ProfileType) => void;
};

const Profile: React.FC<PropsType> = ({
  status,
  profile,
  updateUserStatus,
  isOwner,
  setUserPhoto,
  saveProfile,
}) => {
  return (
    <div className={style.profileContainer}>
      <ProfileInfo
        saveProfile={saveProfile}
        setUserPhoto={setUserPhoto}
        isOwner={isOwner}
        status={status}
        profile={profile}
        updateUserStatus={updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
