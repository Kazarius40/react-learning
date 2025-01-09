import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(({users}) => setUsers(users));
    }, [])

    return (
        <div>
            {
                users.map(user => <UserComponent item={user} />)
            }
        </div>
    );
};

export default UsersComponent;