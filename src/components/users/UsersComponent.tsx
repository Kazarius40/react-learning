import {useState} from "react";
import {IUser} from "../../models/IUser.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    return (
        <div>

        </div>
    );
};

export default UsersComponent;