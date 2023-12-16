import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import "../assets/form.css";
import { ActionData } from "../types/ActionData";
import ErrorList from "./ErrorList";

function LoginForm() {
  const actionData = useActionData() as ActionData | null;
  const message = actionData && actionData.data?.message;
  const errors = actionData && actionData.data?.errors;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className="form">
        <h1>Log in</h1>
        {message && <p className="error">{message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          {errors?.email && <ErrorList errors={errors.email} />}
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
          {errors?.password && <ErrorList errors={errors.password} />}
        </p>
        <div className="actions">
          <Link to="/register">Register</Link>
          <button disabled={isSubmitting} className="button">
            Log in
          </button>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
