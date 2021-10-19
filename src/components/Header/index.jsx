import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
  const onOpenProfile = () => {
    props.getUserProfile(props.id);
    props.getUserStatus(props.id);
  };
  return (
    <header className={style.header}>
      <div className={style.loginContainer}>
        {props.isAuth ? (
          <>
            <NavLink onClick={onOpenProfile} className={style.login} to={`/profile/${props.id}`}>
              {props.login}
            </NavLink>
            <NavLink onClick={() => props.logout()} className={style.logout} to={`/login`}>
              Logout
            </NavLink>
          </>
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
