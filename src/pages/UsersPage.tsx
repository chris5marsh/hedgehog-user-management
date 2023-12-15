import { useLoaderData } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import Pagination from "../components/Pagination";
import { UsersResponse } from "../types/User";

function UsersPage() {
  const usersResponse = useLoaderData() as UsersResponse;

  return (
    <div id="users-page">
      <h1>List of users</h1>
      <UsersTable users={usersResponse.data} />
      {usersResponse.total_pages > 1 && (
        <Pagination
          page={usersResponse.page}
          perPage={usersResponse.per_page}
          total={usersResponse.total}
          totalPages={usersResponse.total_pages}
        />
      )}
    </div>
  );
}

export default UsersPage;
