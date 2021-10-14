import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'redux/authReducer';
import { getUserProfile, getUserStatus } from 'redux/profileReducer';
import Header from '.';

class HeaderContainer extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
});

export default connect(mapStateToProps, { getUserProfile, getUserStatus, logout })(HeaderContainer);
