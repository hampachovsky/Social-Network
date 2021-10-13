import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.loginContainer}>
        {props.isAuth ? (
          <div>
            <NavLink
              onClick={() => props.getUserProfile(props.id)}
              className={style.login}
              to={`/profile/${props.id}`}
            >
              {props.login}
            </NavLink>
            <NavLink onClick={() => props.logout()} className={style.logout} to={`/login`}>
              Logout
            </NavLink>
          </div>
        ) : (
          <NavLink className={style.login} to="/login">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
