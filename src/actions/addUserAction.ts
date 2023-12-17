import { redirect } from "react-router-dom";
import { AddUserRequest } from "../types/Requests";
import { apiUrl } from "../types/ApiUrl.const";
import { createErrorResponse, getAuthToken } from "../utils/auth";
import { addUserToStore } from "../utils/user";

async function addUserAction({ request }: { request: Request }) {
  const data = await request.formData();
  const authData: AddUserRequest = {
    email: data.get("email") as string,
    first_name: data.get("first_name") as string,
    last_name: data.get("last_name") as string,
  };
  const token = getAuthToken();

  if (!token) {
    return createErrorResponse("You must be authenticated to add a user.");
  }

  const response = await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    return createErrorResponse("Could not add user.");
  }

  const resData = await response.json();
  // Add new user to usersStore
  await addUserToStore(resData);
  return redirect(`/users/${resData.id}`);
}

export default addUserAction;
