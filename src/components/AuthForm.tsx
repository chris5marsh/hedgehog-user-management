import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import classes from "./AuthForm.module.css";
import { AuthMode } from "../types/authmode";

function AuthForm() {
  const actionData = useActionData() as { data: { message: string } } | null;
  console.log(actionData);

  const message = actionData && actionData.data?.message;
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();

  const authMode = searchParams.get("mode") as AuthMode;
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{authMode === AuthMode.LOGIN ? "Log in" : "Register new user"}</h1>
        {message && <p className={classes.error}>{message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        {authMode === AuthMode.REGISTER && (
          <p>
            <label htmlFor="first_name">First name</label>
            <input id="first_name" type="password" name="first_name" required />
          </p>
        )}
        {authMode === AuthMode.REGISTER && (
          <p>
            <label htmlFor="last_name">Last name</label>
            <input id="last_name" type="password" name="last_name" required />
          </p>
        )}
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        {authMode === AuthMode.REGISTER && (
          <p>
            <label htmlFor="password_confirmation">Confirm password</label>
            <input
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              required
            />
          </p>
        )}
        <div className={classes.actions}>
          <Link
            to={`?mode=${authMode === AuthMode.LOGIN ? "register" : "login"}`}
          >
            {authMode === AuthMode.LOGIN ? "Register new user" : "Log in"}
          </Link>
          <button disabled={isSubmitting} className="button">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
