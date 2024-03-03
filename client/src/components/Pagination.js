import React from 'react';

function Pagination({ totalPages, currentPage, onPageChange }) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <button
                            onClick={() => onPageChange(number)}
                            className={number === currentPage ? 'page-link active' : 'page-link'}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
