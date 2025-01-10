import {FC, ReactNode} from "react";
import {IUser} from "../../models/users/IUser.ts";

type UserTypeProps = {
    item: IUser;
    children?: ReactNode;
}

export const UserComponent: FC<UserTypeProps> = ({item, children}) => {
    return (
        <div>
            {item.id} {item.firstName} {children}
        </div>
    );
};