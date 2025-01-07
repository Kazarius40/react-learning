import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";
import {useState, useEffect} from "react";
import {IToDo} from "../../models/ToDo/IToDo.ts";

export const TodoComponents = () => {
    const [users, setUsers] = useState<IToDo[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(({todos}) => {
                setUsers(todos);
            })
    }, [])

    return (
        <div>
            {
                users.map((user) => (
                    <TodoComponent key={user.id} item={user}>
                        {user.todo}
                    </TodoComponent>
                ))
            }
        </div>

    )
}