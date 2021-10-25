import Preloader from 'components/common/Preloader';
import HeaderContainer from 'components/Header/HeaderContainer';
import Login from 'components/Login';
import Navbar from 'components/Navbar/';
import React, { Suspense } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { initializeApp } from 'redux/appReducer';
import { AppStateType } from 'redux/reduxStore';
import './App.css';

const ProfileContainer = React.lazy(() => import('components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('components/Users/UsersContainer'));
const Dialogs = React.lazy(() => import('components/Dialogs'));

class App extends React.Component<PropsFromRedux> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    if (!this.props.isAuth) return <Login />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="wrap-whole">
          <Navbar />
          <Suspense fallback={<Preloader />}>
            <div className="app-wrapper-content">
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/profile" />
                </Route>
                <Route path="/login" exact>
                  <Redirect to="/profile" />
                </Route>
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/messages" render={() => <Dialogs />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route render={() => <h1>404 NOT FOUND</h1>} />
              </Switch>
            </div>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
});

const connector = connect(mapStateToProps, { initializeApp });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
