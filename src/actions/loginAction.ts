import { json, redirect } from "react-router-dom";
import { LoginRequest } from "../types/Requests";
import { apiUrl } from "../types/ApiUrl.const";

async function loginAction({ request }: { request: Request }) {
  const data = await request.formData();
  const authData: LoginRequest = {
    email: data.get("email") as string,
    password: data.get("password") as string,
  };

  const response = await fetch(`${apiUrl}/login`, {
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
    return json(
      { data: { message: "Could not log user in." } },
      { status: 500 }
    );
  }

  const resData = await response.json();
  const token = resData.token;

  token && localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/users");
}

export default loginAction;
