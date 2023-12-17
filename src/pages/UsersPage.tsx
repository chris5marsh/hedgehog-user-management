import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import Pagination from "../components/Pagination";
import { User, UsersResponse } from "../types/User";

function UsersPage() {
  const perPage = 10;
  const usersResponse = useLoaderData() as UsersResponse;
  const [allUsers, setAllUsers] = useState<User[]>(usersResponse.data || []);
  const [users, setUsers] = useState<User[]>(allUsers.slice(0, perPage));

  const handlePageChange = (page: number) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    setUsers(allUsers.slice(start, end));
  };

  useEffect(() => {
    setAllUsers(usersResponse.data || []);
    setUsers(allUsers.slice(0, perPage));
  }, [allUsers, usersResponse.data]);

  return (
    <div id="users-page">
      <h1>List of users</h1>
      <UsersTable users={users} />
      {allUsers.length > perPage && (
        <Pagination
          perPage={perPage}
          total={allUsers.length}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default UsersPage;
