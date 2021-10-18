import React from 'react';
import style from './Paginator.module.css';

const Paginator = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.pageList}>
      {pages.map((p, index) => {
        return (
          <span
            key={index}
            className={props.currentPage === p ? style.selectedPage : ''}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
