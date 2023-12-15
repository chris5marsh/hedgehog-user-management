import { checkAuthLoader } from "./auth";
import { apiUrl } from "../types/ApiUrl.const";

export async function getUsersLoader() {
  return getUsers();
}

export async function getUsers(perPage = 100, page = 1) {
  const token = checkAuthLoader();
  return await fetch(`${apiUrl}/users?per_page=${perPage}&page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
