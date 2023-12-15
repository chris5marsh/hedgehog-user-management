import { json, redirect } from "react-router-dom";
import { AuthRequest } from "../types/AuthRequest";
import { apiUrl } from "../types/ApiUrl.const";

async function addUserAction({ request }: { request: Request }) {
  const data = await request.formData();
  const authData: AuthRequest = {
    email: data.get("email") as string,
    first_name: data.get("first_name") as string,
    last_name: data.get("last_name") as string,
  };

  const response = await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    return json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  return redirect(`/users/${resData.id}`);
}

export default addUserAction;
