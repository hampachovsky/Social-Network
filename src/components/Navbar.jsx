import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
