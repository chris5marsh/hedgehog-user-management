import { checkAuthLoader } from "./auth";
import { apiUrl } from "../types/ApiUrl.const";
import { UsersResponse } from "../types/User";

let usersStore: UsersResponse;

export async function getUsersLoader() {
  return getUsers();
}

export async function getUsers(perPage = 100, page = 1) {
  const token = checkAuthLoader();
  if (usersStore) {
    return usersStore;
  }
  const usersResponse = await fetch(
    `${apiUrl}/users?per_page=${perPage}&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const usersJson = await usersResponse.json();
  usersStore = usersJson;
  return usersJson;
}
