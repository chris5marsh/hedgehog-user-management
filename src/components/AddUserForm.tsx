import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import "../assets/form.css";

function AddUserForm() {
  const actionData = useActionData() as { data: { message: string } } | null;
  const message = actionData && actionData.data?.message;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className="form">
        <h1>Add new user</h1>
        {message && <p className="error">{message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="first_name">First name</label>
          <input id="first_name" type="text" name="first_name" required />
        </p>
        <p>
          <label htmlFor="last_name">Last name</label>
          <input id="last_name" type="text" name="last_name" required />
        </p>
        <div className="actions">
          <Link to="?mode=login">Log in</Link>
          <button disabled={isSubmitting} className="button">
            {isSubmitting ? "Submitting..." : "Add new user"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AddUserForm;
