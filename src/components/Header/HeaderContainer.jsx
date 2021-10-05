import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from 'redux/auth_reducer';
import { authAPI } from 'api/api';
import Header from '.';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getUser().then((data) => {
      this.props.setUserData(data.data);
    });
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

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
