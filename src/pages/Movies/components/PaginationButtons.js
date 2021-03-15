import _ from "lodash";
import PropTypes from "prop-types";

const PaginationButtons = ({
    itemsCount,
    pageSize,
    pageNumber,
    handlePageChange,
}) => {
    const pages = _.range(1, Math.ceil(itemsCount / pageSize) + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page) => {
                    return (
                        <li
                            key={page}
                            className={`page-item ${
                                pageNumber === page && "active"
                            }`}
                        >
                            <button
                                onClick={() => handlePageChange(page)}
                                className="page-link"
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

PaginationButtons.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
};

export default PaginationButtons;
