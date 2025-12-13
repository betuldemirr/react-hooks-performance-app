import React from "react";
import { User } from "@/types/user";

type Props = {
  user: User;
  onSelect: (id: number) => void;
};

const UserRow = React.memo(({ user, onSelect }: Props) => {
  return (
    <div
      style={{ padding: 8, borderBottom: "1px solid #eee", cursor: "pointer" }}
      onClick={() => onSelect(user.id)}
    >
      {user.firstName} {user.lastName} – {user.email}
    </div>
  );
});

export default UserRow;
