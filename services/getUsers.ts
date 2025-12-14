import { api } from "./api";
import { UsersResponse } from "@/types/api";
import { User } from "@/types/user";

export async function getUsers(): Promise<User[]> {
  const response = await api.get<UsersResponse>(
    "/users",
    {
      params: {
        limit: 1000,
      },
    }
  );

  return response.data.users;
}