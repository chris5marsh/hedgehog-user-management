import { Form, Link } from "react-router-dom";
import { User } from "../types/User";
import classes from "./UsersTable.module.css";

function UsersTable({ users }: { users: User[] }) {
  const userRows = users.map((user) => (
    <tr key={user.id} className={classes.userstable__row}>
      <td data-key="display_picture">
        <img
          className={classes.userstable__display_picture}
          src={user.display_picture || "/img/default.webp"}
          alt={`${user.first_name} ${user.last_name}`}
          width="40"
          height="40"
        />
      </td>
      <td data-key="first_name" data-title="First name" title={user.first_name}>
        {user.first_name}
      </td>
      <td data-key="last_name" data-title="Last name" title={user.last_name}>
        {user.last_name}
      </td>
      <td data-key="email" data-title="Email" title={user.email}>
        {user.email}
      </td>
      <td data-key="view">
        <Link className={classes.userstable__link} to={`/users/${user.id}`}>
          View
        </Link>
      </td>
      <td data-key="delete">
        <Form method="post" action={`/users/${user.id}/delete`}>
          <button className={classes.userstable__link}>Delete</button>
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

export default UsersTable;
