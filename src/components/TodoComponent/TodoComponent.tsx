import {IToDo} from "../../models/ToDo/IToDo.ts";
import {FC} from "react";

type IProps = {
    item: IToDo;
}
export const TodoComponent: FC<IProps> = ({item}) => {

    return (
        <div>
            <h4>{item.userId}</h4>
            <p>{item.todo}</p>
            <p>{item.completed ? 'true' : 'false'}</p>
        </div>
    )

}