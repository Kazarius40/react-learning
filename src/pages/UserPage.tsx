import {useUser} from "../redux/hooks/useUser.ts";
import {UserComponent} from "../components/userComponent/UserComponent.tsx";

export const UserPage = () => {

    const {user, loadState} = useUser();

    return (
        <div>
            {!loadState && <div>Loading</div>}
            {user && <UserComponent user={user}/>}
        </div>
    );
};