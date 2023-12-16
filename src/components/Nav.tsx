import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "./Nav.module.css";

function Nav() {
  const token = useRouteLoaderData("root") as string | undefined;

  return (
    <nav className={classes.nav}>
      <NavLink to={`/`}>
        <img
          src="/img/header.webp"
          alt="Hedgehog User Manager"
          width="120"
          height="120"
          className={classes.nav__icon}
        />
      </NavLink>
      <ul className={classes.nav__list}>
        {!token && (
          <>
            <li className={classes.nav__item}>
              <NavLink
                end
                to={`/login`}
                className={({ isActive }) =>
                  [
                    isActive ? classes["nav__link--active"] : "",
                    classes.nav__link,
                  ].join(" ")
                }
              >
                Log in
              </NavLink>
            </li>
            <li className={classes.nav__item}>
              <NavLink
                to={`/register`}
                className={({ isActive }) =>
                  [
                    isActive ? classes["nav__link--active"] : "",
                    classes.nav__link,
                  ].join(" ")
                }
              >
                Register
              </NavLink>
            </li>
          </>
        )}
        {token && (
          <>
            <li className={classes.nav__item}>
              <NavLink
                end
                to={`/users`}
                className={({ isActive }) =>
                  [
                    isActive ? classes["nav__link--active"] : "",
                    classes.nav__link,
                  ].join(" ")
                }
              >
                View all users
              </NavLink>
            </li>
            <li className={classes.nav__item}>
              <NavLink
                to={`/users/add`}
                className={({ isActive }) =>
                  [
                    isActive ? classes["nav__link--active"] : "",
                    classes.nav__link,
                  ].join(" ")
                }
              >
                Add a new user
              </NavLink>
            </li>
            <li className={classes.nav__item}>
              <Form action="/logout" method="post">
                <button
                  className={[
                    classes.nav__link,
                    classes["nav__logout-button"],
                  ].join(" ")}
                >
                  Logout
                </button>
              </Form>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
