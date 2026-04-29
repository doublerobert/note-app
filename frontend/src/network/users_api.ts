import { User } from "../models/user";
import { fetchData } from "../util/fetchData";

export async function getLoggedInUser(): Promise<User> {
  const response = await fetchData("/api/users", { method: "GET" });

  return response.json();
}

interface SignupUserCredentials {
  username: string;
  email: string;
  password: string;
}

export async function signUp(
  credentials: SignupUserCredentials,
): Promise<User> {
  const response = await fetchData("/api/users/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return response.json();
}

interface LoginUserCredentials {
  username: string;
  password: string;
}

export async function login(credentials: LoginUserCredentials): Promise<User> {
  const response = await fetchData("/api/users/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return response.json();
}

export async function logout() {
  await fetchData("/api/users/logout", { method: "POST" });
}
