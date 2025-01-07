import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";
import {useState} from "react";

export const TodoComponents = ()=>{
    const [users, setUsers] = useState([]);
    fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(json => {
        setUsers(json);
    });
    return (
        {
            users.map()
        }
    )
}