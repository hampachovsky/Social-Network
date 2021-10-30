import { useTypedSelector } from 'hooks/useTypedSelector';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/authReducer';
import { getUserProfile, getUserStatus } from 'redux/profileReducer';
import style from './Header.module.css';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const login = useTypedSelector((state) => state.auth.login);
  const id = useTypedSelector((state) => state.auth.id);

  const onOpenProfile = () => {
    dispatch(getUserProfile(id as number));
    dispatch(getUserStatus(id as number));
  };
  return (
    <header className={style.header}>
      <div className={style.loginContainer}>
        {isAuth ? (
          <>
            <NavLink onClick={onOpenProfile} className={style.login} to={`/profile/${id}`}>
              {login}
            </NavLink>
            <NavLink onClick={() => dispatch(logout())} className={style.logout} to={`/login`}>
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
