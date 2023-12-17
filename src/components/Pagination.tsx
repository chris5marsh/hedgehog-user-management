import { useState } from "react";
import { Link } from "react-router-dom";
import { PaginationLinks } from "../types/PaginationLinks";
import classes from "./Pagination.module.css";

function Pagination({
  startPage,
  perPage,
  total,
  onPageChange,
}: {
  startPage: number;
  perPage: number;
  total: number;
  onPageChange?: (page: number) => void;
}) {
  const [page, setPage] = useState(startPage);
  const startNumber = page * perPage - perPage + 1;
  const endNumber = Math.min(page * perPage, total);
  const totalNumber = total;
  const totalPages = Math.ceil(total / perPage);

  function handleClick(link: PaginationLinks) {
    let newPage = page;
    if (link === PaginationLinks.FIRST) {
      newPage = 1;
    } else if (link === PaginationLinks.PREVIOUS) {
      newPage -= 1;
    } else if (link === PaginationLinks.NEXT) {
      newPage += 1;
    } else if (link === PaginationLinks.LAST) {
      newPage = totalPages;
    }
    setPage(newPage);
    onPageChange && onPageChange(newPage);
  }

  return (
    <div className={classes.pagination}>
      <p className={classes.pagination__text}>
        Showing {startNumber} to {endNumber} of {totalNumber} entries.
      </p>
      <ul className={classes.pagination__list}>
        {page > 2 && (
          <li>
            <Link
              className={classes.pagination__item}
              to={`?page=1`}
              onClick={() => handleClick(PaginationLinks.FIRST)}
            >
              &lt;&lt; {PaginationLinks.FIRST}
            </Link>
          </li>
        )}
        {page > 1 && (
          <li>
            <Link
              className={classes.pagination__item}
              to={`?page=${+page - 1}`}
              onClick={() => handleClick(PaginationLinks.PREVIOUS)}
            >
              &lt; {PaginationLinks.PREVIOUS}
            </Link>
          </li>
        )}
        {page < totalPages && (
          <li>
            <Link
              className={classes.pagination__item}
              to={`?page=${+page + 1}`}
              onClick={() => handleClick(PaginationLinks.NEXT)}
            >
              {PaginationLinks.NEXT} &gt;
            </Link>
          </li>
        )}
        {page < totalPages - 1 && (
          <li>
            <Link
              className={classes.pagination__item}
              to={`?page=${totalPages}`}
              onClick={() => handleClick(PaginationLinks.LAST)}
            >
              {PaginationLinks.LAST} &gt;&gt;
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
