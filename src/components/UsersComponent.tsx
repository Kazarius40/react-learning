import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";

export const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([])
    console.log(users);

    const foo = useCallback(() => {
        console.log('test');
    }, [])

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
            <UserComponent foo={foo}/>
        </div>
    );
};