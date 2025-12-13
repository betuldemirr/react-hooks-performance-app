import { User } from "@/types/user";

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch("https://dummyjson.com/users?limit=1000");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();
  return data.users;
};
