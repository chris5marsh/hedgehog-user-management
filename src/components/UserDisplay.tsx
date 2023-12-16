import { Form, Link } from "react-router-dom";
import { User } from "../types/User";
import classes from "./UserDisplay.module.css";

function UserDisplay({ user }: { user: User | undefined }) {
  return (
    <>
      {!user && <p>User not found</p>}
      {user && (
        <div className={classes.userdisplay}>
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <img
            className={classes.userdisplay__display_picture}
            src={user.display_picture || "/img/default.webp"}
            alt={`${user.first_name} ${user.last_name}`}
            width="150"
            height="150"
          />
          <p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
          <Form method="post" action={`/users/${user.id}/delete`}>
            <button className="button">Delete user</button>
          </Form>
          <hr />
          <p>
            <Link to="/users">Back to users</Link>
          </p>
        </div>
      )}
    </>
  );
}

export default UserDisplay;
