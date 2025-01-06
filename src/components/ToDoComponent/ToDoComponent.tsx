import {IToDoList} from "../../models/TodoComponent/ToDoList.ts";
import {FC, ReactNode} from "react";

type IProps = {
    itemOfUser: IToDoList;
    children: ReactNode;
}
export const TodoComponent: FC<IProps> = ({itemOfUser, children}) => {
    return (
        <div className= 'border-2'>
            <h4>UserId: {itemOfUser.userId}</h4>
            <p>Title: {children}</p>
            <p>Status: {itemOfUser.completed ? 'true' : 'false'}</p>
        </div>
    )
}