import React from "react";
import "../styles/Pagination.css";

export default function Pagination({ page, setPage, hasNextPage }) {
  function pageNumber(amount) {
    setPage((prevPage) => prevPage + amount);
  }
  return (
    <div className='allPButtons'>
      {page !== 1 ? (
        <button className="pageButtons" onClick={() => pageNumber(-1)}>
          {"<<"}
        </button>
      ) : null}
      {page !== 1 ? (
        <button className="pageButtons" onClick={() => setPage(1)}>
          {"1"}
        </button>
      ) : null}
      {page > 2 ? <button className="pageButtons">{"..."}</button> : null}
      {page > 2 ? (
        <button className="pageButtons" onClick={() => pageNumber(-1)}>
          {page - 1}
        </button>
      ) : null}
      <button className="pageButtons">{page}</button>
      {hasNextPage ? (
        <button className="pageButtons" onClick={() => pageNumber(1)}>
          {page + 1}
        </button>
      ) : null}
      {hasNextPage ? (
        <button className="pageButtons" onClick={() => pageNumber(1)}>
          {">>"}
        </button>
      ) : null}
    </div>
  );
}
