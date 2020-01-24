import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currenPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize); // ceil rounds up to the nearest integer
  const pages = _.range(1, pagesCount + 1); // [1, ..., ..., ..., up to pages count] +1 because method does't include the end number itself

  if (pagesCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currenPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currenPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
