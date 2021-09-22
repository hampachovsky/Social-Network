import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.sidebar}>
      <img
        src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4866092.jpg"
        alt=""
      />

      <nav className={style.nav}>
        <div>
          <NavLink
            activeClassName={style.activeLink}
            className={style.item}
            to="/profile"
          >
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName={style.activeLink}
            className={style.item}
            to="/messages"
          >
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName={style.activeLink}
            className={style.item}
            to="/news"
          >
            News
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName={style.activeLink}
            className={style.item}
            to="/music"
          >
            Music
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName={style.activeLink}
            className={style.item}
            to="/settings"
          >
            Settings
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
