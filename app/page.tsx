"use client";

import { useState, useCallback, useMemo, useRef } from "react";
import { useUsers } from "@/hooks/useUsers";
import SearchInput from "@/components/users/SearchInput";
import UserList from "@/components/users/UserList";
import Loader from "@/components/common/Loader";
import { useRenderCount } from "@/hooks/useRenderCount";

export default function Page() {
  const renderCount = useRenderCount();

  const { users, loading } = useUsers();
  const [search, setSearch] = useState("");
  const selectedUserRef = useRef<number | null>(null);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  const handleSelectUser = useCallback((id: number) => {
    selectedUserRef.current = id;
    console.log("Selected user:", id);
  }, []);

  if (loading) return <Loader />;

  console.log("Render count:", renderCount);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Hooks Performance App</h1>

      <SearchInput value={search} onChange={setSearch} />
      <UserList users={filteredUsers} onSelect={handleSelectUser} />
    </div>
  );
}
