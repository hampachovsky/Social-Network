import React from 'react';
import { connect } from 'react-redux';
import { getUser, logout } from 'redux/authReducer';
import { getUserProfile } from 'redux/profileReducer';
import Header from '.';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

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

export default connect(mapStateToProps, { getUser, getUserProfile, logout })(HeaderContainer);
