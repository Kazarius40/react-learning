import {useEffect, useState} from "react";
import {IUser} from "../../models/users/IUser.ts";
import {UserComponent} from "../user/UserComponent.tsx";
import {userService} from "../../services/api.services.ts";
import {IUsersResponse} from "../../models/users/IUsersResponse.ts";

export const UsersComponent = () => {
    
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then(({users}: IUsersResponse) => setUsers(users));
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