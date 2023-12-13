import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/users/1`}>User 1</Link>
        </li>
        <li>
          <Link to={`/users/2`}>User 2</Link>
        </li>
        <li>
          <Link to={`/users/add`}>Add a new user</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
