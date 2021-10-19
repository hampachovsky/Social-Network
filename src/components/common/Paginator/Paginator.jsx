import React, { useState } from 'react';
import style from './Paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5 }) => {
  const [portionNumber, setPortionNumber] = useState(1);
  const pageCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pageCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={style.pagination}>
      {portionNumber > 1 && (
        <button className={style.switchBtn} onClick={() => setPortionNumber(portionNumber - 1)}>
          &laquo;
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              key={p}
              className={
                currentPage === p ? `${style.selectedPage} ${style.pages}` : `${style.pages}`
              }
              onClick={() => onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      {portionNumber < portionCount && (
        <button className={style.switchBtn} onClick={() => setPortionNumber(portionNumber + 1)}>
          &raquo;
        </button>
      )}
    </div>
  );
};

export default Paginator;
