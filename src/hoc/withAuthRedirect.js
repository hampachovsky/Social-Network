import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedRedirectComponent;
};

export default withAuthRedirect;
