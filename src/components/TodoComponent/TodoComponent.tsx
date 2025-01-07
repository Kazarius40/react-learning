import {IToDo} from "../../models/ToDo/IToDo.ts";
import {FC} from "react";

type IProps = {
    item: IToDo;
    children: ReactNode;
}
export const TodoComponent: FC<IProps> = ({item, children}) => {

    return (
        <div>
            <h4>{item.userId}</h4>
            <p>{children}</p>
            <p>{item.completed ? 'true' : 'false'}</p>
        </div>
    )

}