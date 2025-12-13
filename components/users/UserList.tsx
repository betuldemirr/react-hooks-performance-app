import { User } from "@/types/user";
import UserRow from "./UserRow";

type Props = {
    users: User[];
    onSelect: (id: number) => void;
    selectedUserId: number | null;
};
const UserList = ({ users, onSelect, selectedUserId }: Props) => {
  return (
    <div>
        {users.map((user) => (
            <UserRow key={user.id} user={user} onSelect={onSelect} isSelected={user.id === selectedUserId}/>
        ))}
    </div>
  );
};

export default UserList;
