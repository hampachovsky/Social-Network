import React from 'react';
import './App.css';
import { initializeApp } from 'redux/appReducer';

import Navbar from 'components/Navbar/';
import { Route, Switch } from 'react-router';
import News from 'components/News/';
import Music from 'components/Music/';
import Settings from 'components/Settings/';
import AuthRedirectComponent from 'components/Dialogs';
import UsersContainer from 'components/Users/UsersContainer';
import ProfileContainer from 'components/Profile/ProfileContainer';
import HeaderContainer from 'components/Header/HeaderContainer';
import Login from 'components/Login';
import { connect } from 'react-redux';
import Preloader from 'components/common/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <div className="app-wrapper-content">
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/messages" render={() => <AuthRedirectComponent />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
