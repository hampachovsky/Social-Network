import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from 'redux/profile_reducer';
import Profile from '.';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getUserProfile(userId);
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

export default connect(mapStateToProps, { getUserProfile })(withURLDataContainerComponent);
