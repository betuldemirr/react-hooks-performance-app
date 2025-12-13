import { useState, useMemo, useDeferredValue } from "react";
import { User } from "@/types/user";

export const useUserSearch = (users: User[]) => {
  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const normalizedSearch = useMemo(
    () => deferredSearch.toLowerCase(),
    [deferredSearch]
  );

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [users, normalizedSearch]);

  return {search, setSearch, filteredUsers,isPending: search !== deferredSearch};
};
