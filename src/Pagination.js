import React from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      {pages.map(page => (
        <button key={page} className="pagination-button" onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;