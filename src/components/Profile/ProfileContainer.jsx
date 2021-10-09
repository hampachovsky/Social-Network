import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, updateUserStatus, getUserStatus } from 'redux/profileReducer';
import Profile from '.';
import { withRouter } from 'react-router';
//import withAuthRedirect from 'hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 20006;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
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
  };
};

// FIXME:   withAuthRedirect
export default compose(
  connect(mapStateToProps, { getUserProfile, updateUserStatus, getUserStatus }),
  withRouter
)(ProfileContainer);
