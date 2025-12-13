import React from "react";
import { User } from "@/types/user";

type UserRowProps = {
  user: User;
  onSelect: (id: number) => void;
  isSelected: boolean;
};

const UserRow = React.memo(({ user, onSelect, isSelected }: UserRowProps) => {
  return (
    <div
      onClick={() => onSelect(user.id)}
      className={`cursor-pointer border-b border-gray-200 px-4 py-3 transition-colors
      ${isSelected ? "bg-indigo-50" : "hover:bg-gray-100"}`}
    >
      <div className="font-medium text-gray-900">
        {user.firstName} {user.lastName}
      </div>
      <div className="text-sm text-gray-500">{user.email}</div>
    </div>
  );
});

export default UserRow;
