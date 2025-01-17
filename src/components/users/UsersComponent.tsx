import {useEffect} from "react";
import {getAll} from "../../services/api.services.ts";
import {IBaseResponse} from "../../models/IBaseResponse.ts";
import {IUser} from "../../models/users/IUser.ts";

export const UsersComponent = () => {

    useEffect(() => {
        getAll<IBaseResponse & {users: IUser[]}>('/users').then({users} => )
    }, []);

    return (
        <>
        </>
    );
};