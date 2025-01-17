import {useEffect, useState} from "react";
import {getAll} from "../../services/api.services.ts";
import {IBaseResponse} from "../../models/IBaseResponse.ts";
import {IUser} from "../../models/users/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const page = Number(searchParams.get("page")) || 1;
        const skip = (page - 1) * 30;
        getAll<IBaseResponse & { users: IUser[] }>('/users?skip=' + skip).then(({users}) => setUsers(users));
    }, [searchParams]);

    return (
        <>
            {
                users.map((user) => <UserComponent key={user.id} user={user}/>)
            }
        </>
    );
};