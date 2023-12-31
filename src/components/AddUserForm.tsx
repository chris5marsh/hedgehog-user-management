import { Form, useActionData, useNavigation } from "react-router-dom";
import "../assets/form.css";
import ErrorList from "./ErrorList";
import { ActionData } from "../types/ActionData";

function AddUserForm() {
  const actionData = useActionData() as ActionData | null;
  const message = actionData && actionData.data?.message;
  const errors = actionData && actionData.data?.errors;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className="form">
        <h1>Add new user</h1>
        {message && <p className="error">{message}</p>}
        <div className="form__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="off"
            required
          />
          {errors?.email && <ErrorList errors={errors.email} />}
        </div>
        <div className="form__field">
          <label htmlFor="first_name">First name</label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            autoComplete="off"
            required
          />
          {errors?.first_name && <ErrorList errors={errors.first_name} />}
        </div>
        <div className="form__field">
          <label htmlFor="last_name">Last name</label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            autoComplete="off"
            required
          />
          {errors?.last_name && <ErrorList errors={errors.last_name} />}
        </div>
        <div className="actions">
          <button disabled={isSubmitting} className="button">
            {isSubmitting ? "Submitting..." : "Add new user"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AddUserForm;
