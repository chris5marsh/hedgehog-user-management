import { json, redirect } from "react-router-dom";
import { AuthRequest } from "../types/AuthRequest";
import { apiUrl } from "../types/ApiUrl.const";

async function loginAction({ request }: { request: Request }) {
  const data = await request.formData();
  const authData: AuthRequest = {
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
    return json({ message: "Could not authenticate user." }, { status: 500 });
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
