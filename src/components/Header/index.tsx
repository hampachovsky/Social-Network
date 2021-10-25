import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

type PropsType = {
  id: number | null;
  login: string | null;
  isAuth: boolean;
  getUserProfile: (id: number | null) => Promise<void>;
  getUserStatus: (id: number | null) => Promise<void>;
  logout: () => Promise<void>;
};

const Header: React.FC<PropsType> = ({
  isAuth,
  login,
  id,
  getUserProfile,
  getUserStatus,
  logout,
}) => {
  const onOpenProfile = () => {
    getUserProfile(id);
    getUserStatus(id);
  };
  return (
    <header className={style.header}>
      <div className={style.loginContainer}>
        {isAuth ? (
          <>
            <NavLink onClick={onOpenProfile} className={style.login} to={`/profile/${id}`}>
              {login}
            </NavLink>
            <NavLink onClick={() => logout()} className={style.logout} to={`/login`}>
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
