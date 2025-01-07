import {IToDo} from "../../models/ToDo/IToDo.ts";
import {FC, ReactNode} from "react";

type IProps = {
    item: IToDo;
    children: ReactNode;
}
export const TodoComponent: FC<IProps> = ({item, children}) => {

    return (
        <div className='border-2'>
            <h4>UserId: {item.userId}</h4>
            <p>ToDo: {children}</p>
            <p>Status: {item.completed ? 'true' : 'false'}</p>
        </div>
    )

}