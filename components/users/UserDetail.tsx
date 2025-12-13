import { User } from "@/types/user";
import React from "react";

type Props = {
  user: User | null;
};

const UserDetail = React.memo(({ user }: Props) => {
  if (!user) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-gray-400">
        Select a user to see details
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
          {user.firstName} {user.lastName}
        </div>
        <div>
          <span className="font-medium text-gray-600">Email:</span>{" "}
          {user.email}
        </div>
        <div>
          <span className="font-medium text-gray-600">ID:</span>{" "}
          {user.id}
        </div>
      </div>
    </div>
  );
});

export default UserDetail;
