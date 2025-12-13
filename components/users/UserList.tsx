import { User } from "@/types/user";
import UserRow from "./UserRow";

type Props = {
  users: User[];
  onSelect: (id: number) => void;
};

const UserList = ({ users, onSelect }: Props) => {
  return (
    <div>
      {users.map(user => (
        <UserRow
          key={user.id}
          user={user}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default UserList;
