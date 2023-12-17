import { useContext, useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import Pagination from "../components/Pagination";
import { User, UsersResponse } from "../types/User";
import { MessageProviderContext } from "../providers/MessageProvider";

const perPage = 10;

function UsersPage() {
  const { message } = useContext(MessageProviderContext);
  const [searchParams] = useSearchParams();
  const startPage = +(searchParams.get("page") ?? 1);
  const startSlice = (startPage - 1) * perPage;
  const endSlice = startPage * perPage;
  const usersResponse = useLoaderData() as UsersResponse;
  const [allUsers, setAllUsers] = useState<User[]>(usersResponse.data);
  const [users, setUsers] = useState<User[]>(
    allUsers.slice(startSlice, endSlice)
  );

  // Page change is handled through search params
  // So pages can be bookmarked/linked
  // const handlePageChange = (page: number) => {
  //   const start = (page - 1) * perPage;
  //   const end = start + perPage;
  //   setUsers(allUsers.slice(start, end));
  // };

  useEffect(() => {
    setAllUsers(usersResponse.data);
    setUsers(usersResponse.data.slice(startSlice, endSlice));
  }, [startSlice, endSlice, usersResponse.data]);

  return (
    <div id="users-page">
      <h1>List of users</h1>
      {message && <p className={message.status}>{message.text}</p>}
      <UsersTable users={users} />
      {allUsers.length > perPage && (
        <Pagination
          startPage={startPage}
          perPage={perPage}
          total={allUsers.length}
        />
      )}
    </div>
  );
}

export default UsersPage;
