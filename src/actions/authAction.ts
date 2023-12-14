import { json, redirect } from "react-router-dom";
import { AuthMode } from "../types/authmode";
import { AuthRequest } from "../types/AuthRequest";
import { apiUrl } from "../types/ApiUrl.const";

async function authAction({ request }: { request: Request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || AuthMode.LOGIN;

  if (mode !== AuthMode.LOGIN && mode !== AuthMode.REGISTER) {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData: AuthRequest = {
    email: data.get("email") as string,
    password: data.get("password") as string,
  };

  if (mode === AuthMode.REGISTER) {
    authData.first_name = data.get("first_name") as string;
    authData.last_name = data.get("last_name") as string;
    authData.password_confirmation = data.get(
      "password_confirmation"
    ) as string;
  }

  const response = await fetch(`${apiUrl}/${mode}`, {
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
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;

  token && localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  if (mode === AuthMode.REGISTER) {
    return redirect("/auth?mode=login");
  }

  return redirect("/users");
}

export default authAction;
