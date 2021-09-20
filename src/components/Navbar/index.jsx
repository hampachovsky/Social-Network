import React from 'react';
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
          <a className={style.item} href="/profile">
            Profile
          </a>
        </div>
        <div>
          <a className={style.item} href="/messages">
            Messages
          </a>
        </div>
        <div>
          <a className={style.item} href="/news">
            News
          </a>
        </div>
        <div>
          <a className={style.item} href="/music">
            Music
          </a>
        </div>
        <div>
          <a className={style.item} href="/settings">
            Settings
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
