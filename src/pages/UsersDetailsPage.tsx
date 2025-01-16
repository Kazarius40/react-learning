import {useLocation} from "react-router-dom";
import {IUser} from "../models/users/IUser.ts";
import {UserDetailsComponent} from "../components/users-details-component/UserDetailsComponent.tsx";

export const UsersDetailsPage = () => {
    const {state} = useLocation();
    const user = state as IUser;

    return (
        <>
            <UserDetailsComponent key={user.id} user={user} />
        </>
    );
};