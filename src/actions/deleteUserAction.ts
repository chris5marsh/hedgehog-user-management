import { redirect } from "react-router-dom";
import { apiUrl } from "../types/ApiUrl.const";
import { createErrorResponse, getAuthToken } from "../utils/auth";
import { removeUserFromStore } from "../utils/user";

async function deleteUserAction({ params }: { params: { userId?: string } }) {
  const token = getAuthToken();

  if (!token) {
    return createErrorResponse("You must be authenticated to remove a user.");
  }

  const userId = params.userId;

  if (!userId) {
    return createErrorResponse("You must provide a user ID.");
  }

  const response = await fetch(`${apiUrl}/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    return createErrorResponse("Could not delete user.");
  }

  await removeUserFromStore(+userId);
  return redirect("/users");
}

export default deleteUserAction;
