import { checkAuthLoader } from "./auth";
import { apiUrl } from "../types/ApiUrl.const";
import { User, UsersResponse } from "../types/User";

let usersStore: UsersResponse;

export async function getUsersLoader() {
  return getUsers();
}

export async function getUsers(perPage = 1000, page = 1) {
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

export async function addUserToStore(user: User) {
  await getUsers();
  usersStore.data.push(user);
}

export async function removeUserFromStore(userId: number) {
  await getUsers();
  const newUsersStoreData = usersStore.data.filter((u) => {
    return u.id !== userId;
  });
  usersStore.data = newUsersStoreData;
}
