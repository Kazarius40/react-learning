import {useEffect, useState} from "react";
import {getAll} from "../../services/api.services.ts";
import {IBaseResponse} from "../../models/IBaseResponse.ts";
import {IUser} from "../../models/users/IUser.ts";
import {UserComponent} from "../user/UserComponent.tsx";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAll<IBaseResponse & {users: IUser[]}>('/users').then(({users}) => setUsers(users))
    }, []);

    return (
        <>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </>
    );
};