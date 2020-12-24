import React from "react";
import "../styles/Pagination.css";

export default function Pagination({ page, setPage, hasNextPage }) {
  function pageNumber(amount) {
    setPage((prevPage) => prevPage + amount);
  }
  return (
    <div>
      {page !== 1 ? (
        <button onClick={() => pageNumber(-1)}>{"<<"}</button>
      ) : null}
      {page !== 1 ? <button onClick={() => setPage(1)}>{"1"}</button> : null}
      {page > 2 ? <button>{"..."}</button> : null}
      {page > 2 ? (
        <button onClick={() => pageNumber(-1)}>{page - 1}</button>
      ) : null}
      <button>{page}</button>
      {hasNextPage ? (
        <button onClick={() => pageNumber(1)}>{page + 1}</button>
      ) : null}
      {hasNextPage ? (
        <button onClick={() => pageNumber(1)}>{">>"}</button>
      ) : null}
    </div>
  );
}
