import {IUser} from "../../models/users/IUser.ts";
import {FC} from "react";

type UserDetailsProps = {
    user: IUser;
}

export const UserDetailsComponent: FC<UserDetailsProps> = ({user}) => {
    return (
        <>
            {user.firstName} {user.lastName}
        </>
    );
};