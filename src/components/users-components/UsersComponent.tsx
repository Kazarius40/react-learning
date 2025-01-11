import {useEffect, useState} from "react";
import {IUser} from "../../models/users/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
// import {getAll, userService} from "../../services/api.services.ts";
// import {IUsersResponse} from "../../models/users/IUsersResponse.ts";
import {getAll} from "../../services/api.services.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    // useEffect(() => {
    //     userService.getUsers().then(({users}: IUsersResponse) => setUsers(users));
    // }, [])

    useEffect(() => {
        getAll<IBaseResponseModel & { users: IUser[] }>('users').then(({users}) => setUsers(users));
    }, [])

    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} item={user}>
                    {user.lastName}
                </UserComponent>))
            }
        </div>
    );
};