import React from 'react';
import loader from 'assets/images/preloader.svg';
import style from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={style.preLoaderContainer}>
      <img className={style.preLoader} src={loader} alt="" /> :
    </div>
  );
};

export default Preloader;
