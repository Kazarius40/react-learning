import {useUsers} from "../redux/hooks/useUsers.ts";
import {UserList} from "../components/userscomponent/UserList.tsx";

export const UsersPage = () => {

    const {users, loadState} = useUsers();

    return (
        <div>
            {!loadState && <div>Loading</div>}
            <UserList users={users}/>
        </div>
    );
};