import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={style.sidebar}>
      <div>
        <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4866092.jpg" alt="" />
      </div>
      <nav className={style.nav}>
        <div>
          <NavLink activeClassName={style.activeLink} className={style.item} to="/profile">
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName={style.activeLink} className={style.item} to="/messages">
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName={style.activeLink} className={style.item} to="/users">
            Users
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName={style.activeLink} className={style.item} to="/chat">
            Chat
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
