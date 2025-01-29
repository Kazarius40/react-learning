import {IUser} from "../../models/user/IUser.ts";
import {FC} from "react";

type UserTypeProps = {
    user: IUser
}

export const UserComponent: FC<UserTypeProps> = ({user}) => {
    return (
        <div>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
        </div>
    );
};