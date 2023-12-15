import { useLoaderData } from "react-router-dom";
import UserDisplay from "../components/UserDisplay";
import { User } from "../types/User";

function UserPage() {
  const userResponse = useLoaderData() as User;

  return (
    <div id="user-page">
      <UserDisplay user={userResponse} />
    </div>
  );
}

export default UserPage;
