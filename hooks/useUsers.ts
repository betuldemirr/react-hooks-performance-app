import { useEffect, useState } from "react";
import { getUsers } from "@/services/userService";
import { User } from "@/types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    getUsers()
      .then(setUsers)
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
};
