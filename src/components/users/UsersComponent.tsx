import {useEffect, useState} from "react";
import {getAll} from "../../services/api.services.ts";
import {IBaseResponse} from "../../models/IBaseResponse.ts";
import {IUser} from "../../models/users/IUser.ts";
import {UserComponent} from "../user/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {

    const page = Number(useSearchParams()[0].get('page')) || 1;
    const skip = (page - 1) * 30
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAll<IBaseResponse & { users: IUser[] }>('/users/?skip=' + skip).then(({users}) => setUsers(users))
    }, [skip]);

    return (
        <>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </>
    );
};