import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([])

    const arr: number[] = useMemo(() => {
        return [1, 4, 12];
    }, []);

    const foo = useCallback(() => {
        console.log('test');
    }, []);

    console.log(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => {
                setUsers(value)
            })

        return () => {
            console.log('unsubscribe');
        }

    }, []);
    return (
        <div>
            users component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};