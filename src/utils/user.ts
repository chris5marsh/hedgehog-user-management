import { checkAuthLoader } from "./auth";
import { apiUrl } from "../types/ApiUrl.const";

export async function getUserLoader() {
  const userId = 1;
  const token = checkAuthLoader();
  return await fetch(`${apiUrl}/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getUsersLoader() {
  return getUsers();
}

export async function getUsers(perPage = 6, page = 1) {
  const token = checkAuthLoader();
  return await fetch(`${apiUrl}/users?perPage=${perPage}&page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
