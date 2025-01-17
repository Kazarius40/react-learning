import {IUser} from "../../models/users/IUser.ts";
import {FC} from "react";

type UserProps = {
    item: IUser;
}

export const UserComponent: FC<UserProps> = ({item}) => {
    return (
        <div>
            {item.firstName} {item.lastName}
        </div>
    );
};