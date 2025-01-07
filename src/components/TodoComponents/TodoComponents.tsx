import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";
import {useState, useEffect} from "react";
import {IToDo} from "../../models/ToDo/IToDo.ts";
import {IToDoResponse} from "../../models/IToDoResponse/IToDoResponse.ts";
import {getToDos} from "../../services/api_todos/api.todo.service.ts";

export const TodoComponents = () => {
    const [users, setUsers] = useState<IToDo[]>([]);
    useEffect(() => {
        getToDos()
            .then(({todos}: IToDoResponse) => {
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