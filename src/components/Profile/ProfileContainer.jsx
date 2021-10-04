import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from 'redux/profile_reducer';
import * as axios from 'axios';
import Profile from '.';

class ProfileAPIContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      this.props.setUserProfile(response.data);
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

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileAPIContainer);

export default ProfileContainer;
