import {IUser} from "../../models/users/IUser.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

type UserTypeProps = {
    user: IUser;
}

export const UserComponent: FC<UserTypeProps> = ({user}) => {


    return (
        <div>
            <Link to={'details'} state={user}>
                {user.id}: {user.firstName} {user.lastName}
            </Link>
        </div>
    );
};