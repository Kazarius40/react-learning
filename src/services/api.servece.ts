import {IToDoList} from "../models/TodoComponent/ToDoList.ts";

export const getUsersToDo = async (): Promise<IToDoList[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json());
}