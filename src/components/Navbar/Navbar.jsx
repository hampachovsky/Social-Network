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
          <a className={style.item} href="#s">
            Profile
          </a>
        </div>
        <div>
          <a className={style.item} href="#d">
            Messages
          </a>
        </div>
        <div>
          <a className={style.item} href="#w">
            News
          </a>
        </div>
        <div>
          <a className={style.item} href="#g">
            Music
          </a>
        </div>
        <div>
          <a className={style.item} href="#set">
            Settings
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
