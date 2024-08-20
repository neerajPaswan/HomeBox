import React from 'react'

function Pagination({paginate,currentPage, totalItem,itemsPerPage}) {
    const lastPage = Math.ceil(totalItem/itemsPerPage);
  return (
    <div className="join ">
      <button
        className="join-item btn"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage == 1}
      >
        «
      </button>
      <button className="join-item btn">{currentPage}</button>

      <button
        className="join-item btn"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage == lastPage}
      >
        »
      </button>
    </div>
  );
}

export default Pagination