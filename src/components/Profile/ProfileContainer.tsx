import React from 'react';
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
class ProfileContainer extends React.Component<PropsType> {
  resetProfile = () => {
    let userId = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedId as number;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  };

  componentDidMount() {
    this.resetProfile();
  }
  componentDidUpdate(prevProps: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.resetProfile();
    }
  }

  render() {
    return (
      <>
        <Profile
          isOwner={!this.props.match.params.userId}
          updateUserStatus={this.props.updateUserStatus}
          profile={this.props.profile}
          status={this.props.status}
          setUserPhoto={this.props.setUserPhoto}
          saveProfile={this.props.saveProfile}
        />
      </>
    );
  }
}

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
