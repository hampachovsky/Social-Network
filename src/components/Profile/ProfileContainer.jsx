import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, updateUserStatus, getUserStatus } from 'redux/profileReducer';
import Profile from '.';
import { Redirect, withRouter } from 'react-router';
//import withAuthRedirect from 'hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;
    return (
      <>
        <Profile
          {...this.props}
          updateUserStatus={this.props.updateUserStatus}
          profile={this.props.profile}
          status={this.props.status}
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

// FIXME:   withAuthRedirect
export default compose(
  connect(mapStateToProps, { getUserProfile, updateUserStatus, getUserStatus }),
  withRouter
)(ProfileContainer);
