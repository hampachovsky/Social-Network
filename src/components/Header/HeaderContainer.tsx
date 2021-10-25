import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { logout } from 'redux/authReducer';
import { getUserProfile, getUserStatus } from 'redux/profileReducer';
import { AppStateType } from 'redux/reduxStore';
import Header from '.';

class HeaderContainer extends React.Component<PropsFromRedux> {
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
});

const connector = connect(mapStateToProps, { getUserProfile, getUserStatus, logout });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
