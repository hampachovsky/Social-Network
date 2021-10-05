import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from 'redux/profile_reducer';
import { profileAPI } from 'api/api';
import Profile from '.';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    profileAPI.getUser(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(withURLDataContainerComponent);
