import Preloader from 'components/common/Preloader';
import AuthRedirectComponent from 'components/Dialogs';
import HeaderContainer from 'components/Header/HeaderContainer';
import Login from 'components/Login';
import Music from 'components/Music/';
import Navbar from 'components/Navbar/';
import News from 'components/News/';
import ProfileContainer from 'components/Profile/ProfileContainer';
import Settings from 'components/Settings/';
import UsersContainer from 'components/Users/UsersContainer';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { initializeApp } from 'redux/appReducer';
import './App.css';

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
