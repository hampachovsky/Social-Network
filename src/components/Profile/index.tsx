import Preloader from 'components/common/Preloader';
import { useTypedSelector } from 'hooks/useTypedSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getUserProfile, getUserStatus, saveProfile, setUserPhoto, updateUserStatus } from 'redux/profileReducer';
import { ProfileType } from 'types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/index';

const Profile: React.FC = () => {
  const status = useTypedSelector((state) => state.profilePage.status);
  const profile = useTypedSelector((state) => state.profilePage.profile);
  const authorizedId = useTypedSelector((state) => state.auth.id);
  const { userId }: { userId: string } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    let userQueryId = +userId;
    if (!userId) {
      userQueryId = authorizedId as number;
    }
    dispatch(getUserProfile(userQueryId));
    dispatch(getUserStatus(userQueryId));
  }, [userId, authorizedId, dispatch]);
  if (!profile) return <Preloader />;

  const onUpdateUserStatus = (status: string) => {
    dispatch(updateUserStatus(status));
  };
  const onSetUserPhoto = (file: File) => {
    dispatch(setUserPhoto(file));
  };
  const onSaveProfile = async (profile: ProfileType) => {
    await dispatch(saveProfile(profile));
  };

  return (
    <div className={style.profileContainer}>
      <ProfileInfo
        saveProfile={onSaveProfile}
        setUserPhoto={onSetUserPhoto}
        isOwner={!userId}
        status={status}
        profile={profile}
        updateUserStatus={onUpdateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
