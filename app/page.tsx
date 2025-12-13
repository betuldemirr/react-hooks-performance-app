"use client";

import { useState, useCallback, useMemo } from "react";
import { useUsers } from "@/hooks/useUsers";
import { useUserSearch } from "@/hooks/useUserSearch";
import SearchInput from "@/components/users/SearchInput";
import UserList from "@/components/users/UserList";
import UserDetail from "@/components/users/UserDetail";
import Loader from "@/components/common/Loader";
import { useRenderCount } from "@/hooks/useRenderCount";

export default function Page() {
  const renderCount = useRenderCount();
  const { users, loading } = useUsers();

  const { search, setSearch, filteredUsers, isPending } =
    useUserSearch(users);

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const selectedUser = useMemo(() => {
    return users.find(u => u.id === selectedUserId) ?? null;
  }, [users, selectedUserId]);

  const handleSelectUser = useCallback((id: number) => {
    setSelectedUserId(id);
  }, []);

  if (loading) return <Loader />;

  console.log("Render count:", renderCount);

  return (
    <div className="mx-auto max-w-[900px] p-6">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">
        React Hooks Performance App
      </h1>

      <SearchInput value={search} onChange={setSearch} />

      {isPending && (
        <p className="mt-1 text-xs text-gray-400">
          Updating results…
        </p>
      )}

      <p className="mt-2 text-sm text-gray-500">
        {filteredUsers.length} users found
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <UserList
            users={filteredUsers}
            selectedUserId={selectedUserId}
            onSelect={handleSelectUser}
          />
        </div>

        <div className="md:col-span-1">
          <UserDetail
            user={selectedUser}
            hasResults={filteredUsers.length > 0}
          />
        </div>
      </div>
    </div>
  );
}