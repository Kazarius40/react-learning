import {useEffect, useState} from "react";
import {getAll} from "../../services/api.services.ts";
import {IBaseResponse} from "../../models/IBaseResponse.ts";
import {IUser} from "../../models/users/IUser.ts";
import {UserDetailsComponent} from "./UserDetailsComponent.tsx";

export const UsersDetailsComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAll<IBaseResponse & {users: IUser[]}>('/users/details').then(({users}) => setUsers(users));
    }, []);

    return (
        <>
            {
                users.map((user) => <UserDetailsComponent key={user.id} user={user} />)
            }
        </>
    );
};