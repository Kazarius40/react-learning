import {FC} from "react";
import {IUser} from "../../models/IUser.tsx";

type UserTypeProps = {
    item: IUser;
}
const UserComponent: FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            {
                item.username
            }
        </div>
    );
};

export default UserComponent;