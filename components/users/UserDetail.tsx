import { User } from "@/types/user";
import React from "react";
import Skeleton from "@/components/common/Skeleton";

type UserDetailProps = {
  user: User | null;
  hasResults: boolean;
  isLoading: boolean;
};

const UserDetail = React.memo(({ user, hasResults, isLoading }: UserDetailProps) => {
    if (isLoading) {
      return (
        <div className="rounded-lg border border-gray-200 p-6 space-y-4">
          <Skeleton width="w-1/3" height="h-5" />
          <Skeleton width="w-2/3" />
          <Skeleton width="w-1/2" />
          <Skeleton width="w-1/4" />
        </div>
      );
    }

    if (!hasResults) {
      return (
        <div className="flex h-full items-center justify-center text-sm text-gray-400">
          No users found
        </div>
      );
    }

    if (!user) {
      return (
        <div className="flex h-full items-center justify-center text-sm text-gray-400">
          Select a user from the list
        </div>
      );
    }

    return (
      <div className="animate-fade-in rounded-lg border border-gray-200 p-6">
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
  }
);

export default UserDetail;
