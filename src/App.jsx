import React from 'react';
import './App.css';
import Header from 'components/Header/';
import Navbar from 'components/Navbar/';
import Profile from 'components/Profile/';
import { Route } from 'react-router';
import News from 'components/News/';
import Music from 'components/Music/';
import Settings from 'components/Settings/';
import Dialogs from 'components/Dialogs';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route
          path="/messages"
          render={() => (
            <Dialogs
              state={props.state.dialogsPage}
              addMessage={props.addMessage}
              updateNewMessageText={props.updateNewMessageText}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
