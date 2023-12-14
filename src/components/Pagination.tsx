import { Link } from "react-router-dom";

export default function Pagination({
  page,
  perPage,
  total,
  totalPages,
}: {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}) {
  const startNumber = page * perPage - perPage + 1;
  const endNumber = page * perPage;
  const totalNumber = total;
  return (
    <>
      <p>
        Showing {startNumber} to {endNumber} of {totalNumber} entries. Page{" "}
        {page} of {totalPages}.
      </p>
      <ul>
        {page > 2 && (
          <li>
            <Link to={`?page=1`}>&lt;&lt; First</Link>
          </li>
        )}
        {page > 1 && (
          <li>
            <Link to={`?page=${+page - 1}`}>&lt; Previous</Link>
          </li>
        )}
        {page < totalPages && (
          <li>
            <Link to={`?page=${+page + 1}`}>Next &gt;</Link>
          </li>
        )}
        {page < totalPages - 1 && (
          <li>
            <Link to={`?page=${totalPages}`}>Last &gt;&gt;</Link>
          </li>
        )}
      </ul>
    </>
  );
}
