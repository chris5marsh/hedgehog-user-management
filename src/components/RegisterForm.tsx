import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import ErrorList from "./ErrorList";
import "../assets/form.css";

type registerActionData = {
  data: {
    message?: string;
    errors?: {
      first_name: string[];
      last_name: string[];
      email: string[];
      password: string[];
      password_confirmation: string[];
    };
  };
};

function RegisterForm() {
  const actionData = useActionData() as registerActionData | null;
  const message = actionData && actionData.data?.message;
  const errors = actionData && actionData.data?.errors;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className="form">
        <h1>Register</h1>
        {message && <p className="error">{message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          {errors?.email && <ErrorList errors={errors.email} />}
        </p>
        <p>
          <label htmlFor="first_name">First name</label>
          <input id="first_name" type="text" name="first_name" required />
          {errors?.first_name && <ErrorList errors={errors.first_name} />}
        </p>
        <p>
          <label htmlFor="last_name">Last name</label>
          <input id="last_name" type="text" name="last_name" required />
          {errors?.last_name && <ErrorList errors={errors.last_name} />}
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
          {errors?.password && <ErrorList errors={errors.password} />}
        </p>
        <p>
          <label htmlFor="password_confirmation">Confirm password</label>
          <input
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            required
          />
          {errors?.password_confirmation && (
            <ErrorList errors={errors.password_confirmation} />
          )}
        </p>
        <div className="actions">
          <Link to="/login">Log in</Link>
          <button disabled={isSubmitting} className="button">
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default RegisterForm;
