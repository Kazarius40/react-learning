import {IUser} from "../../models/user/IUser.ts";
import {FC} from "react";

type UserListProps = {
    users: IUser[];
}

export const UserList: FC<UserListProps> = ({users}) => {

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    );
};