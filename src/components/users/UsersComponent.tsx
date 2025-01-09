import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";
import {userService} from "../../services/api.services.ts";

const UsersComponent = () => {
    
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then(({users}) => setUsers(users));
    }, [])
    
    return (
        <div>
            {
                users.map(user => <UserComponent item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;