import {IUser} from "../../models/users-models/IUser.ts";
import {useEffect, useState} from "react";
import {getAll} from "../../services/api.service.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUser[]}>('users').then(({users}) => setUsers(users))
    }, [])
    return (
        <>
            {
                users.map(user => (<UserComponent key={user.id} item={user}/>))
            }
        </>
    );
};