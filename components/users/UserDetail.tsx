import { User } from "@/types/user";
import React from "react";

type DetailState = "empty" | "no-results" | "selected";

type UserDetailProps = {
  user: User | null;
  hasResults: boolean;
};

const UserDetail = React.memo(({ user, hasResults }: UserDetailProps) => {
  const detailState: DetailState = (() => {
    if (user) return "selected";
    if (!hasResults) return "no-results";
    return "empty";
  })();

  if (detailState === "empty") {
    return (
      <div className="flex h-full items-center justify-center text-sm text-gray-400">
        Select a user from the list
      </div>
    );
  }

  if (detailState === "no-results") {
    return (
      <div className="flex h-full items-center justify-center text-sm text-gray-400">
        No users found
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        User Details
      </h2>

      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium text-gray-600">Name:</span>{" "}
          {user!.firstName} {user!.lastName}
        </div>
        <div>
          <span className="font-medium text-gray-600">Email:</span>{" "}
          {user!.email}
        </div>
        <div>
          <span className="font-medium text-gray-600">ID:</span>{" "}
          {user!.id}
        </div>
      </div>
    </div>
  );
});

export default UserDetail;
