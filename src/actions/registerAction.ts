import { redirect } from "react-router-dom";
import { RegisterRequest } from "../types/Requests";
import { apiUrl } from "../types/ApiUrl.const";
import { createErrorResponse } from "../utils/auth";

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

  // Errors specified in API docs
  if (response.status === 422 || response.status === 409) {
    return response;
  }

  // Unspecified error
  if (!response.ok) {
    return createErrorResponse("Could not authenticate user.");
  }

  return redirect("/login");
}

export default registerAction;
