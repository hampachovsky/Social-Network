import React from 'react';
import './App.css';
import Header from 'components/Header/';
import Navbar from 'components/Navbar/';
import Profile from 'components/Profile/';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Messages from 'components/Messages';
import News from './components/News/index';
import Music from './components/Music/index';
import Settings from './components/Settings/index';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
