import React from 'react';
import './App.css';

import Navbar from 'components/Navbar/';
import { Route } from 'react-router';
import News from 'components/News/';
import Music from 'components/Music/';
import Settings from 'components/Settings/';
import AuthRedirectComponent from 'components/Dialogs';
import UsersContainer from 'components/Users/UsersContainer';
import ProfileContainer from 'components/Profile/ProfileContainer';
import HeaderContainer from 'components/Header/HeaderContainer';
import Login from 'components/Login';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/messages" render={() => <AuthRedirectComponent />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
