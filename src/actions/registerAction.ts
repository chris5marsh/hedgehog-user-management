import { json, redirect } from "react-router-dom";
import { RegisterRequest } from "../types/Requests";
import { apiUrl } from "../types/ApiUrl.const";

async function registerAction({ request }: { request: Request }) {
  const data = await request.formData();
  const authData: RegisterRequest = {
    email: data.get("email") as string,
    first_name: data.get("first_name") as string,
    last_name: data.get("last_name") as string,
    password: data.get("password") as string,
    password_confirmation: data.get("password_confirmation") as string,
  };

  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  console.log(response);

  // Errors specified in API docs
  if (response.status === 422 || response.status === 409) {
    return response;
  }

  // Unspecified error
  if (!response.ok) {
    return json(
      { data: { message: "Could not authenticate user." } },
      { status: 500 }
    );
  }

  return redirect("/login");
}

export default registerAction;
