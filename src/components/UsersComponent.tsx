import {useFetch} from "../hooks/useFetch.tsx";
import {IUser} from "../models/IUser.ts";
import {FC} from "react";
import {UserComponent} from "./UserComponent.tsx";

type UrlProps = {
    baseUrl: string;
}

export const UsersComponent: FC<UrlProps> = ({baseUrl}) => {
    const users = useFetch<IUser[]>(baseUrl + '/users', [])
    return (
        <>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </>
    );
};