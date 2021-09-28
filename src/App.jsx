import React from 'react';
import './App.css';
import Header from 'components/Header/';
import Navbar from 'components/Navbar/';
import Profile from 'components/Profile/';
import { Route } from 'react-router';
import Messages from 'components/Messages';
import News from './components/News/index';
import Music from './components/Music/index';
import Settings from './components/Settings/index';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <Profile state={props.state.profilePage} />}
        />
        <Route
          path="/messages"
          render={() => <Messages state={props.state.messagesPage} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
