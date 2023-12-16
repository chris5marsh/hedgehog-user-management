import { useLoaderData, useParams } from "react-router-dom";
import UserDisplay from "../components/UserDisplay";
import { UsersResponse } from "../types/User";

function UserPage() {
  const usersResponse = useLoaderData() as UsersResponse;
  const params = useParams();
  const userId = params.userId;
  let user;

  if (userId) {
    user = usersResponse.data.find((u) => {
      return u.id === parseInt(userId);
    });
  }

  return (
    <div id="user-page">
      <UserDisplay user={user} />
    </div>
  );
}

export default UserPage;
