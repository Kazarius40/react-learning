import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";

export const UsersComponent = () => {
    const arr: number[] = useMemo(() => {
        return [1, 4, 12];
    }, []);

    const foo = useCallback(() => {
    }, []);


    const users = useFetch();

    return (
        <div>
            users component
            {users.map((user, index) => <UserComponent key={index} item={user} foo={foo} arr={arr}/>)}
        </div>
    );
};