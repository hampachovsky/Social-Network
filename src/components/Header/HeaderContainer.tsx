import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'redux/authReducer';
import { getUserProfile, getUserStatus } from 'redux/profileReducer';
import { AppStateType } from 'redux/reduxStore';
import Header from '.';

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
});

const connector = connect(mapStateToProps, { getUserProfile, getUserStatus, logout });

export default connector(Header);
