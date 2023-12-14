import { Form, Link } from "react-router-dom";
import { User } from "../types/User";
import classes from "./UsersTable.module.css";

export default function UsersTable({ users }: { users: User[] }) {
  const userRows = users.map((user) => (
    <tr key={user.id} className={classes.userstable__row}>
      <td>
        <img
          className={classes.userstable__display_picture}
          src={user.display_picture}
          alt={`${user.first_name} ${user.last_name}`}
          width="40"
          height="40"
        />
      </td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>
        <Link className="button" to={`/users/${user.id}`}>
          View
        </Link>
      </td>
      <td>
        <Link className="button" to={`/users/${user.id}/edit`}>
          Edit
        </Link>
      </td>
      <td>
        <Form method="post" action={`/users/${user.id}/delete`}>
          <button className="button">Delete</button>
        </Form>
      </td>
    </tr>
  ));
  return (
    <table className={classes.userstable}>
      <thead>
        <tr className={classes.userstable__row}>
          <th></th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{userRows}</tbody>
    </table>
  );
}
