import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";
import {useState} from "react";
import {IToDo} from "../../models/ToDo/IToDo.ts";

export const TodoComponents = () => {
    const [users, setUsers] = useState<IToDo[]>([]);
    fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(json => {
            setUsers(json);
        });
    return (
        {
            users.map((user) => <TodoComponent/>)
        }
    )
}