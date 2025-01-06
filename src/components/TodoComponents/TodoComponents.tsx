import {IToDoList} from "../../models/TodoComponent/ToDoList.ts";
import {TodoComponent} from "../ToDoComponent/ToDoComponent.tsx";
import {useEffect, useState} from "react";
import {getUsersToDo} from "../../services/api.servece.ts";

export const TodoComponents = () => {
    const [usersToDo, setUserToDo] = useState<IToDoList[]>([]);
    useEffect(() => {
        getUsersToDo()
            .then(response => {
                setUserToDo(response);
            })
    }, [])

    return (
        <div>
            {
                usersToDo.map(value =>
                    <TodoComponent key={value.id} itemOfUser={value}>
                        {value.title}
                    </TodoComponent>
                )
            }
        </div>
    )
}