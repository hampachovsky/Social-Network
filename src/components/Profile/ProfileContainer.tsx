import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  setUserPhoto,
  saveProfile,
} from 'redux/profileReducer';
import { AppStateType } from 'redux/reduxStore';
import Profile from '.';

type PathParamsType = {
  userId: string;
};

type PropsType = RouteComponentProps<PathParamsType> & PropsFromRedux;

const ProfileContainer: React.FC<PropsType> = ({
  match,
  getUserProfile,
  getUserStatus,
  authorizedId,
  ...props
}) => {
  useEffect(() => {
    let userId = +match.params.userId;
    if (!userId) {
      userId = authorizedId as number;
    }
    getUserProfile(userId);
    getUserStatus(userId);
  }, [match, getUserProfile, getUserStatus, authorizedId]);
  return (
    <Profile
      isOwner={!match.params.userId}
      updateUserStatus={props.updateUserStatus}
      profile={props.profile}
      status={props.status}
      setUserPhoto={props.setUserPhoto}
      saveProfile={props.saveProfile}
    />
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

const connector = connect(mapStateToProps, {
  getUserProfile,
  updateUserStatus,
  getUserStatus,
  setUserPhoto,
  saveProfile,
});

type PropsFromRedux = ConnectedProps<typeof connector>;
const ProfileContainerComponent = connector(withRouter(ProfileContainer));

export default ProfileContainerComponent;
