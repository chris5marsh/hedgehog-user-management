import { Form, Link } from "react-router-dom";
import { User } from "../types/User";

function UserDisplay({ user }: { user: User }) {
  return (
    <div>
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <img
        src={user.display_picture || "/img/default.webp"}
        alt={`${user.first_name} ${user.last_name}`}
        width="100"
        height="100"
      />
      <p>{user.email}</p>
      <p>
        <Link to="/users">Back to users</Link>
      </p>
      <p>
        <Link to="/users/add">Add new user</Link>
      </p>
      <p>
        <Form method="post" action={`/users/${user.id}/delete`}>
          <button>Delete user</button>
        </Form>
      </p>
    </div>
  );
}

export default UserDisplay;
