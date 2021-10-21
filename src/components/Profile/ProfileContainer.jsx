import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  setUserPhoto,
  saveProfile,
} from 'redux/profileReducer';
import Profile from '.';

class ProfileContainer extends React.Component {
  resetProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  };

  componentDidMount() {
    this.resetProfile();
  }
  componentDidUpdate(prevProps) {
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

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    updateUserStatus,
    getUserStatus,
    setUserPhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer);
