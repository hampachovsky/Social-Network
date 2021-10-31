import Preloader from 'components/common/Preloader';
import { Header } from 'components/Header';
import { Login } from 'components/Login';
import Navbar from 'components/Navbar/';
import { useTypedSelector } from 'hooks/useTypedSelector';
import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { initializeApp } from 'redux/appReducer';
import './App.css';

const Profile = React.lazy(() => import('components/Profile/'));
const Users = React.lazy(() => import('components/Users'));
const Dialogs = React.lazy(() => import('components/Dialogs'));
const ChatPage = React.lazy(() => import('pages/ChatPage'));

export function App() {
  const initialized = useTypedSelector((state) => state.app.initialized);
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) {
    return <Preloader />;
  }
  if (!isAuth) return <Login />;
  return (
    <div className="app-wrapper">
      <Header />
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
              <Route path="/profile/:userId?" render={() => <Profile />} />
              <Route path="/messages" render={() => <Dialogs />} />
              <Route path="/users" render={() => <Users />} />
              <Route path="/chat" render={() => <ChatPage />} />
              <Redirect to="/profile" />
            </Switch>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
